import { combineReducers } from "redux";

import authReducer from "./authReducer";
import countriesReducer from "./coutriesReducer";
export default combineReducers({
  auth: authReducer,
  countries: countriesReducer,
});
