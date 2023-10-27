import {Component, OnInit} from '@angular/core';
import {dispatchGetLogin} from "../../../store/functions/authentication/auth.function";
import {select, Store} from "@ngrx/store";
import {ApplicationState} from "../../../store/application.state";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
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
  constructor(
    private store: Store<ApplicationState>,
    private actions$: Actions
  ) {}

  fetchMemberList(id :any) {
    const formData: any = {
      user_id: id
    };

    dispatchGetMemberList(this.store,this.actions$, formData)
      .then((res: any) => {
        console.log(res)
        }
      )
      .catch((error) => {
      });
  }
  ngOnInit() {
    this.user$.subscribe((user: any) => {
      this.fetchMemberList(user.user.id);
    });
  }
}
