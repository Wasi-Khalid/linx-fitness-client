import { Action, createAction, props } from "@ngrx/store";

export enum LoginActionType {
  LoginPending = 'Login Pending',
  LoginSuccess = 'Login Success',
  LoginFail = 'Login Fail',
}

export const GetLogin = createAction(
  LoginActionType.LoginPending,
  props<{ username: string, password: string }>()
);

export const GetLoginSuccess = createAction(
  LoginActionType.LoginSuccess,
  props<{ user: any }>())

export const GetLoginFail = createAction(
  LoginActionType.LoginFail,
  props<{ message: string }>()
)
