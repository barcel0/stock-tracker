import { SEARCH_COMPANIES, CLEAR_SEARCH_RESULTS, GET_COMPANY } from '../actions/types';

const initialState = {
  searchResults: null,
  details: {
    global: {
      "01. symbol": undefined,
      "02. open": undefined,
      "03. high": undefined,
      "04. low": undefined,
      "05. price": undefined,
      "06. volume": undefined,
      "07. latest trading day": undefined,
      "08. previous close": undefined,
      "09. change": undefined,
      "10. change percent": undefined
    },
    quotes: []
  },

}

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_COMPANIES:
      return { ...state, searchResults: action.payload };
    case CLEAR_SEARCH_RESULTS:
      return { ...state, searchResults: null }
    case GET_COMPANY:
      return { ...state, details: action.payload };
    default:
      return state;
  }
}