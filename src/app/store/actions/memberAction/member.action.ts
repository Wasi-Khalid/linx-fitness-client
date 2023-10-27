import { Action, createAction, props } from "@ngrx/store";

export enum GetMemberActionType {
  GetMemberPending = 'Get Member Info Pending',
  GetMemberSuccess = 'Get Member Info Success',
  GetMemberFail = 'Get Member Info Fail',
}
export enum GetMemberListActionType {
  GetMemberListPending = 'Get Member List Pending',
  GetMemberListSuccess = 'Get Member List Success',
  GetMemberListFail = 'Get Member List Fail',
}
export const FetchMember = createAction(
  GetMemberActionType.GetMemberPending,
  props<{ user_id: number, member_id: number}>()
);

export const FetchMemberSuccess = createAction(
  GetMemberActionType.GetMemberSuccess,
  props<{ member: any }>())

export const FetchMemberFail = createAction(
  GetMemberActionType.GetMemberFail,
  props<{ message: string }>()
)

export const FetchMemberList = createAction(
  GetMemberListActionType.GetMemberListPending,
  props<{ user_id: number}>()
);

export const FetchMemberListSuccess = createAction(
  GetMemberListActionType.GetMemberListSuccess,
  props<{ member: any }>())

export const FetchMemberListFail = createAction(
  GetMemberListActionType.GetMemberListFail,
  props<{ message: string }>()
)
