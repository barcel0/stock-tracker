import { SIGN_UP, LOG_IN, LOG_OUT, GET_USER, UPDATE_WATCHLIST } from '../actions/types';

const initialState = {
  token: null,
  user: {
    email: null,
    watchlist: []
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
    case LOG_IN:
      return { ...state, token: action.payload };
    case LOG_OUT:
      return { ...state, token: null, user: { email: null, watchlist: [] } }
    case UPDATE_WATCHLIST:
    case GET_USER:
      return { ...state, user: action.payload }
    default:
      return state;
  }
}