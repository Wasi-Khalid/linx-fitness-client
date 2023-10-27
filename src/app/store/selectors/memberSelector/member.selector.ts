import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getMemberState = createFeatureSelector<any>('member');

export const getUser = createSelector(
  getMemberState,
  (state: any) => state.memberInfo
);
