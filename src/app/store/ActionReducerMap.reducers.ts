import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from './application.state';
import userReducer from './reducers/user.reducer';


const reducers: ActionReducerMap<ApplicationState> = {
  user: userReducer
};

export default reducers;
