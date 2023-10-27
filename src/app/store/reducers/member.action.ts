import {GetMemberActionType, GetMemberListActionType} from "../actions/memberAction/member.action";

const initialState: any = {
  loading: false,
  deleting: false,
  deleted: false,
  message: '',
  success: false,
  error: false,
  memberInfo: []
}

const memberReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetMemberActionType.GetMemberPending:
      return { ...state, loading: true, success: false}
    case GetMemberActionType.GetMemberSuccess:
      return { ...state, memberInfo: action.member, loading: false, success: true};
    case GetMemberActionType.GetMemberFail:
      return { ...state, loading: true, success: false, error: true, message: action.type}
    case GetMemberListActionType.GetMemberListPending:
      return { ...state, loading: true, success: false}
    case GetMemberListActionType.GetMemberListSuccess:
      return { ...state, memberInfo: action.member, loading: false, success: true};
    case GetMemberListActionType.GetMemberListFail:
      return { ...state, loading: true, success: false, error: true, message: action.type}
    default:
      return state;
  }
}

export default memberReducer;
