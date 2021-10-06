import {
    DATA_REQUEST,
    DATA_REQUEST_FAILURE,
    DATA_REQUEST_SUCCESS,
  } from '../actions/actionTypes'
  
  const initialState = {
    item: {},
    loading: false,
    error: null,
  };
  
  export default function itemReducer(state = initialState, action) {
    switch (action.type) {
      case DATA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case DATA_REQUEST_FAILURE:
        const {error} = action.payload;
        return {
          ...state,
          loading: false,
          error,
        };
      case DATA_REQUEST_SUCCESS:
        const {data} = action.payload;
        return {
          ...state,
          item: data,
          loading: false,
          error: null,
        };
      default:
        return state;
    }
  }
  