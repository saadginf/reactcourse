import { removeToken, StoreToken } from "../auth/storage";
import {
  AUTH_END,
  AUTH_FAIL,
  AUTH_START,
  AUTH_SUCCESS,
  LOGOUT_START,
  LOGOUT_SUCCESS,
} from "./types";
import jwt_decode from "jwt-decode";
import { getToken } from "../api/auth";
export const loginUser = (userData) => async (dispatch) => {
  dispatch({ type: AUTH_START });

  const result = await getToken(userData.username, userData.password);
  if (!result.ok) {
    console.log(result);
    dispatch({
      type: AUTH_FAIL,
      payload: "Authentication Error",
    });

    return;
  }
  console.log(result);

  StoreToken(result.data.token);
  const decoded = jwt_decode(result.data.token);
  dispatch({
    type: AUTH_SUCCESS,
    payload: decoded,
  });
  dispatch({ type: AUTH_END });
};
export const setCurrentUser = (decoded) => {
  return {
    type: AUTH_SUCCESS,
    payload: decoded,
  };
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT_START,
  });
  removeToken();

  dispatch({
    type: LOGOUT_SUCCESS,
  });
};
