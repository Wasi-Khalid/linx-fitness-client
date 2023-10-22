import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityStateInterface } from "../../state.interface";

export const getUserState = createFeatureSelector<EntityStateInterface<any>>('user');

export const getUser = createSelector(
    getUserState,
    (state: EntityStateInterface<any>) => state.entities
);
