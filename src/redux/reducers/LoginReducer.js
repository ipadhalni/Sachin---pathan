import { LOGIN_CONSTANT } from "../Constant";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_CONSTANT.LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: true, 
      };

      case LOGIN_CONSTANT.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true, 
      };

      case LOGIN_CONSTANT.LOGIN_FAILED:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true, 
      };
    default:
      return state;
  }
};