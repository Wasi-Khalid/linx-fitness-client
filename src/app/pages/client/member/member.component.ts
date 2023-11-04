import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ApplicationState} from "../../../store/application.state";
import {Actions} from "@ngrx/effects";
import {dispatchGetMemberList} from "../../../store/functions/member/member.function";
import {getUser} from "../../../store/selectors/userSelector/user.selector";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{
  user$ = this.store.pipe(select(getUser));
  searchText: string = '';
  originalMembers: any;


  members: any
  constructor(
    private store: Store<ApplicationState>,
    private actions$: Actions
  ) {}

  fetchMemberList(id: any) {
    const formData: any = {
      user_id: id
    };

    dispatchGetMemberList(this.store, this.actions$, formData)
      .then((res: any) => {
        this.originalMembers = res;
        this.members = [...this.originalMembers];
      })
      .catch((error) => {
        console.log(error);
      });
  }
  filterMembers() {
    this.members = [...this.originalMembers];
    if (this.searchText.trim() !== '') {
      this.members = this.members.filter((member: any) =>
        member.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
  ngOnInit() {
    this.user$.subscribe((user: any) => {
      this.fetchMemberList(user.user.id);
    });
  }
}
