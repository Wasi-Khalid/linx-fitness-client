import {Component, Renderer2, ElementRef, OnInit} from '@angular/core';
import {MemberService} from "../../../../services/MemberService/member.service";
import {select, Store} from "@ngrx/store";
import {getUser} from "../../../../store/selectors/userSelector/user.selector";
import {ApplicationState} from "../../../../store/application.state";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";


@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit{
  user$ = this.store.pipe(select(getUser));
  fileString: string = '';
  imageSrc: string = './assets/Avatar.png';
  formData: any = {};
  membership_type: string = '';
  user_id: any = null;
  photo_url: any = null

  constructor(
    private store: Store<ApplicationState>,
    private renderer: Renderer2,
    private toast: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private memberService: MemberService
  ) {}

  filePicker() {
    this.renderer.selectRootElement('#filePicker').click();
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  readFile(event: any): void {
    const file: File = event.target.files && event.target.files.length > 0 ? event.target.files[0] : null;
    this.photo_url = file;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result);
        this.fileString = reader.result as string;
        this.imageSrc = this.fileString;
      };
      reader.readAsDataURL(file);
    }
  }

  selectedCard(value: any) {
    const monthlyCard = document.getElementById('monthly');
    const yearlyCard = document.getElementById('yearly');

    if (monthlyCard) {
      monthlyCard.style.removeProperty('background-color');
      monthlyCard.style.removeProperty('color');
    }

    if (yearlyCard) {
      yearlyCard.style.removeProperty('background-color');
      yearlyCard.style.removeProperty('color');
    }
    if (value === 'monthly') {
      let id = document.getElementById('monthly');
      id?.style.setProperty('background-color', '#222e50', 'important');
      id?.style.setProperty('color', '#fff', 'important');
      this.membership_type = 'monthly';
    } else if (value === 'yearly') {
      let id = document.getElementById('yearly');
      id?.style.setProperty('background-color', '#222e50', 'important');
      id?.style.setProperty('color', '#fff', 'important');
      this.membership_type = 'yearly'
    }
  }

  submit() {
    const formData: FormData = new FormData();
    formData.append('user_id', this.user_id);
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('phone_number', this.formData.phone);
    formData.append('address', this.formData.address);
    formData.append('date_of_birth', this.formatDate(this.formData.dob));
    formData.append('gender', this.formData.gender);
    formData.append('emergency_contact_name', this.formData.emergency_contact_name);
    formData.append('photo_id', this.photo_url);
    formData.append('membership_type', this.membership_type);
    formData.append('payment_information', this.formData.cardNo);

    this.memberService.addMember(formData).then((res: any) => {
      this.toast.success("Member Added Successfully");
      this.spinner.show();
      setTimeout(() => {
        this.router.navigate(['/member']);
        this.spinner.hide();
      }, 2000);

    })
  }


  ngOnInit() {
    this.user$.subscribe((user: any) => {
      this.user_id = user.user.id;
    });
  }

}
