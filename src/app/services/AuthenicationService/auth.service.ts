import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import {Observable, throwError} from "rxjs";
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";
import { GetLogin, GetLoginSuccess, GetLoginFail } from "../../store/actions/userAction/user.action";
import {take, catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  loginUrl = environment.baseUrl + "/auth/login";

  constructor(
    private http: HttpClient,
    private store: Store,
    private actions$: Actions
  ) {
  }

  async login(name: any, password: any): Promise<any> {
    const data = {
      "username": name,
      "password": password
    };

    try {
      const response: any = await this.http.post(this.loginUrl, data).toPromise();
      const action = GetLoginSuccess({ user: response });
      this.store.dispatch(action);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}



