import {
  FETCH_COUNTRIES_END,
  FETCH_COUNTRIES_START,
  FETCH_COUNTRIES_SUCCESS,
} from "./types";
import { getCountries } from "../api/countries";
export const getCountriesList = () => async (dispatch) => {
  dispatch({ type: FETCH_COUNTRIES_START });

  const result = await getCountries();
  if (!result.ok) {
    console.log("ERROR GETTING COUNTRIES");
    return;
  }

  dispatch({
    type: FETCH_COUNTRIES_SUCCESS,
    payload: result.data,
  });
  dispatch({ type: FETCH_COUNTRIES_END });
};
