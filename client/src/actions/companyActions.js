import { SEARCH_COMPANIES, CLEAR_SEARCH_RESULTS, GET_COMPANY } from './types';
import { setLoading } from './apiActions';
import axios from 'axios';
const ALPHAVANTAGE_API_KEY = null; //ideally, an ENV var

export const searchCompanies = searchString => dispatch => {
  axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchString}&apikey=${ALPHAVANTAGE_API_KEY}`)
    .then(response => {
      dispatch({ type: SEARCH_COMPANIES, payload: response.data.bestMatches });
    })
    .catch(error => console.log(error));
}

export const clearSearchResults = () => dispatch => {
  dispatch({ type: CLEAR_SEARCH_RESULTS })
}

export const getCompany = ticker => async dispatch => {
  dispatch(setLoading(true));
  try {
    const responseGlobal = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${ALPHAVANTAGE_API_KEY}`);
    const responseQuotes = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${ticker}&apikey=${ALPHAVANTAGE_API_KEY}`);
    const parsedQuotes = parseQuotes(responseQuotes.data["Monthly Time Series"]);
    const company = { global: responseGlobal.data["Global Quote"], quotes: parsedQuotes };
    dispatch({ type: GET_COMPANY, payload: company });
  } catch (error) {
    console.log(error.message);
  }
  dispatch(setLoading(false));
};

//helpers
const parseQuotes = companyQuotes => {
  let rates = [];
  let maxMonths = 12;
  for (let date in companyQuotes) {
    if (maxMonths > 0) {
      rates.unshift(+companyQuotes[date]["4. close"]);
      maxMonths--;
    }
  }
  return rates;
}