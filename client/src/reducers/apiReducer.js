import { SET_ERROR, SET_LOADING } from '../actions/types';

const initialState = {
  loading: true,
  error: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}