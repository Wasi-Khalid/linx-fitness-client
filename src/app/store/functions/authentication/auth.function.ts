import { Actions, ofType } from "@ngrx/effects";
import { GetLogin, GetLoginSuccess, GetLoginFail } from "../../actions/userAction/user.action";
import { take } from "rxjs/operators";
import { Store } from "@ngrx/store";

export function dispatchGetLogin(store: Store, actions$: Actions, payload: { username: string, password: string }): Promise<any> {
  return new Promise((resolve, reject) => {
    store.dispatch(GetLogin(payload));
    actions$.pipe(
      ofType(GetLoginSuccess, GetLoginFail),
      take(1)
    ).subscribe((action: any) => {
      if (action.type === GetLoginSuccess.type) {
        resolve(action.user);
      } else if (action.type === GetLoginFail.type) {
        reject(action.message);
      }
    });
  });
}
