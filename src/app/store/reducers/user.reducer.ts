import { EntityStateInterface } from "../state.interface";
import { LoginActionType } from "../actions/userAction/user.action";

const initialState: EntityStateInterface<any> = {
    loading: false,
    deleting: false,
    deleted: false,
    message: '',
    success: false,
    error: false,
    entities: []
}

const userReducer = (state = initialState, action: any): EntityStateInterface<any> => {
    switch (action.type) {
        case LoginActionType.LoginPending:
            return { ...state, loading: true, success: false}
        case LoginActionType.LoginSuccess:
            return { ...state, entities: action.user, loading: false, success: true};
        case LoginActionType.LoginFail:
            return { ...state, loading: true, success: false, error: true, message: action.type}
        default:
            return state;
    }
}

export default userReducer;
