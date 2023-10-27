import { Actions, ofType } from "@ngrx/effects";
import { take } from "rxjs/operators";
import { Store } from "@ngrx/store";
import {
  FetchMember,
  FetchMemberFail,
  FetchMemberList, FetchMemberListFail, FetchMemberListSuccess,
  FetchMemberSuccess
} from "../../actions/memberAction/member.action";

export function dispatchGetMember(store: Store, actions$: Actions, payload: { user_id: number, member_id: number}): Promise<any> {
  return new Promise((resolve, reject) => {
    store.dispatch(FetchMember(payload));
    actions$.pipe(
      ofType(FetchMemberSuccess, FetchMemberFail),
      take(1)
    ).subscribe((action: any) => {
      if (action.type === FetchMemberSuccess.type) {
        resolve(action.member);
      } else if (action.type === FetchMemberFail.type) {
        reject(action.message);
      }
    });
  });
}

export function dispatchGetMemberList(store: Store, actions$: Actions, payload: { user_id: number}): Promise<any> {
  return new Promise((resolve, reject) => {
    store.dispatch(FetchMemberList(payload));
    actions$.pipe(
      ofType(FetchMemberListSuccess, FetchMemberListFail),
      take(1)
    ).subscribe((action: any) => {
      if (action.type === FetchMemberListSuccess.type) {
        resolve(action.member);
      } else if (action.type === FetchMemberListFail.type) {
        reject(action.message);
      }
    });
  });
}
