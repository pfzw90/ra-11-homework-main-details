import {
  DATA_REQUEST,
  DATA_REQUEST_FAILURE,
  DATA_REQUEST_SUCCESS,
} from './actionTypes';

export const dataRequest = url => ({
  type: DATA_REQUEST,
  payload: {url},
});

export const dataRequestFailure = error => ({
  type: DATA_REQUEST_FAILURE,
  payload: {error},
});

export const dataRequestSuccess = data => ({
  type: DATA_REQUEST_SUCCESS,
  payload: {data},
});