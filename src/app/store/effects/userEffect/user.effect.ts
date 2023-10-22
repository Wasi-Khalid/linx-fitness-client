import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import { AuthService } from "../../../services/AuthenicationService/auth.service";
import { GetLogin, GetLoginFail, GetLoginSuccess } from '../../actions/userAction/user.action';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}

  userLogin$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(GetLogin),
      map(action => ({ username: action.username, password: action.password })),
      mergeMap(credentials =>
        from(this.authService.login(credentials.username, credentials.password)).pipe(
          map(response => GetLoginSuccess({ user: response })),
          catchError((error: any) => of(GetLoginFail({ message: error.error || 'Invalid Credentials' })))
        )
      )
    )
  );
}
