import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import { GetLogin, GetLoginFail, GetLoginSuccess } from '../../actions/userAction/user.action';
import {
  FetchMember,
  FetchMemberFail,
  FetchMemberList, FetchMemberListFail, FetchMemberListSuccess,
  FetchMemberSuccess
} from "../../actions/memberAction/member.action";
import {MemberService} from "../../../services/MemberService/member.service";

@Injectable()
export class MemberEffects {

  constructor(
    private actions$: Actions,
    private memberService: MemberService
  ) {}

  memberById: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchMember),
      map(action => ({ user_id: action.user_id, member_id: action.member_id})),
      mergeMap(res =>
        from(this.memberService.getMemberById(res.user_id, res.member_id)).pipe(
          map(response => FetchMemberSuccess({ member: response })),
          catchError((error: any) => of(FetchMemberFail({ message: error.error || 'Invalid Member' })))
        )
      )
    )
  );

  memberByUserId: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchMemberList),
      map(action => ({ user_id: action.user_id})),
      mergeMap(res =>
        from(this.memberService.getMemberList(res.user_id)).pipe(
          map(response => FetchMemberListSuccess({ member: response })),
          catchError((error: any) => of(FetchMemberListFail({ message: error.error || 'Error in retrieving Members List' })))
        )
      )
    )
  );
}
