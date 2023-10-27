import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from './application.state';
import userReducer from './reducers/user.reducer';
import memberReducer from "./reducers/member.action";


const reducers: ActionReducerMap<ApplicationState> = {
  user: userReducer,
  member: memberReducer
};

export default reducers;
