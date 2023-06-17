import {
  GET_COUNTRY,
  COUNTRY_DETAIL,
  CLEAN_DETAIL,
  FILTER_COUNTRY,
  GET_COUNTRY_BY_NAME,
  COUNTRYS_CURRENT_PAGE,
  SET_PAGE,
  UPDATE_FILTERED_COUNTRIES,
  ORDER_COUNTRY_POB,
  ORDER_COUNTRY_AZ,
  POST_ACTIVITY,
  GET_ACTIVITY,
  FILTER_ACTIVITY,
} from "./action-type";
import axios from "axios";

export const getCountry = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/countries");
      dispatch({ type: GET_COUNTRY, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const countryDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/countries/${id}`);
      const data = response.data;
      if (!data) {
        throw new Error("The country with that id has not been found");
      }
      dispatch({
        type: COUNTRY_DETAIL,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const cleanDetail = () => {
  try {
    return {
      type: CLEAN_DETAIL,
    };
  } catch (error) {
    alert(error.message);
  }
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/countries/?name=${name}`
      );
      return dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      alert("No existe pais con ese nombre");
    }
  };
};

export const filterCountry = (continent) => {
  return {
    type: FILTER_COUNTRY,
    payload: continent,
  };
};

export const setPage = (page) => {
  return (dispatch) => {
    dispatch({
      type: SET_PAGE,
      payload: page,
    });
  };
};

export const nextPage = (page) => {
  return (dispatch) => {
    dispatch({
      type: SET_PAGE,
      payload: page + 1,
    });
  };
};
export const prevPage = (page) => {
  return (dispatch) => {
    dispatch({
      type: SET_PAGE,
      payload: page - 1,
    });
  };
};

export const countryOnPage = (countriesCurrentPage) => {
  return (dispatch) => {
    dispatch({
      type: COUNTRYS_CURRENT_PAGE,
      payload: countriesCurrentPage,
    });
  };
};

export const updateFilteredCountries = (filteredCountries) => {
  return {
    type: UPDATE_FILTERED_COUNTRIES,
    payload: filteredCountries,
  };
};

export const orderCountryPoblation = (order) => {
  return {
    type: ORDER_COUNTRY_POB,
    payload: order,
  };
};

export const orderCountryAZ = (order) => {
  return {
    type: ORDER_COUNTRY_AZ,
    payload: order,
  };
};

export const postActivity = (activity) => {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:3001/activities/post", activity);
      return dispatch({
        type: POST_ACTIVITY,
      });
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };
};

export const getActivity = () => {
  return async (dispatch) => {
    try {
      await axios.get("http://localhost:3001/activities");
      return dispatch({
        type: GET_ACTIVITY,
      });
    } catch (error) {
      // alert(error.message);
    }
  };
};

export const filterActivity = (activityName) => {
  return {
    type: FILTER_ACTIVITY,
    payload: activityName,
  };
};
