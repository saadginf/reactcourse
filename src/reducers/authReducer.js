import {
  AUTH_START,
  AUTH_END,
  AUTH_FAIL,
  AUTH_SUCCESS,
  LOGOUT_START,
  LOGOUT_SUCCESS,
} from "../actions/types";

const initialState = {
  isAuth: false,
  loading: false,
  error: {},
  user: {},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return { ...state, loading: true };
    case AUTH_END:
      return { ...state, loading: false };
    case AUTH_FAIL:
      return { ...state, error: action.payload };
    case AUTH_SUCCESS:
      return { ...state, isAuth: true, user: action.payload, error: false };
    case LOGOUT_START:
      return { ...state, loading: true };
    case LOGOUT_SUCCESS:
      return { ...state, isAuth: false, user: {}, error: {}, loading: false };

    default:
      return state;
  }
};
export default authReducer;
