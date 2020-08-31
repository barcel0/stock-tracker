import { SET_ERROR, SET_LOADING } from './types';

export const setError = error => dispatch => {
  dispatch({ type: SET_ERROR, payload: error });
}

export const setLoading = value => dispatch => {
  dispatch({ type: SET_LOADING, payload: value });
}
