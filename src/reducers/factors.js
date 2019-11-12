import {
  FETCH_FACTORS_INITIALIZE,
  FETCH_FACTORS_SUCCESS,
  FETCH_FACTORS_FAIL
} from "../actions/index.js";

import initialState from "./initialState";

const factorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FACTORS_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_FACTORS_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_FACTORS_FAIL:
      console.log("reducer", action);
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default factorsReducer;