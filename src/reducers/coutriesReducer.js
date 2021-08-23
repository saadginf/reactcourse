import {
  FETCH_COUNTRIES_END,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_START,
} from "../actions/types";

const initialState = {
  loading: false,
  countries: [],
};
const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_START:
      return { ...state, loading: true };
    case FETCH_COUNTRIES_END:
      return { ...state, loading: false };

    case FETCH_COUNTRIES_SUCCESS:
      return { ...state, countries: action.payload };

    default:
      return state;
  }
};
export default countriesReducer;
