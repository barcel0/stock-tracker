import { SIGN_UP, LOG_IN, LOG_OUT, GET_USER, UPDATE_WATCHLIST } from './types';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { setError } from './apiActions';
// const baseURL = 'http://bcb1c73c2b9f.ngrok.io';    //ngrok, testing in physical device
const baseURL = 'http://10.0.2.2:3000';               //localhost, testing in AVD

export const signUp = (userData, navigation) => async dispatch => {
  try {
    const response = await axios.post(`${baseURL}/api/user/signup`, userData);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: SIGN_UP, payload: response.data });
    navigation.navigate('Watchlist');
  } catch (error) {
    console.log(error);
    dispatch(setError('Something went wrong when trying to sign up. Try again later.'));
  }
};

export const logIn = (userData, navigation) => async dispatch => {
  try {
    const response = await axios.post(`${baseURL}/api/user/login`, userData);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: LOG_IN, payload: response.data.token });
    navigation.goBack();
  } catch (error) {
    console.log(error.message);
    dispatch(setError('Something went wrong when trying to log in. Try again later.'));
  }
};

export const logOut = navigation => async dispatch => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: LOG_OUT });
  navigation.navigate('Home');
};

export const tryLocalSignIn = navigation => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch({ type: LOG_IN, payload: token });
      navigation.navigate('Watchlist');
    } else {
      navigation.navigate('LogIn');
    }
  } catch (error) {
    console.log(error.message);
    dispatch(setError('You must be logged in to see this section.'));
  }
};

export const getUser = () => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      const response = await axios.get(`${baseURL}/api/user/`, { headers: { Authorization: `Bearer ${token}` } });
      dispatch({ type: GET_USER, payload: response.data });
    }
  } catch (error) {
    console.log(error.message);
    dispatch(setError('Something went wrong trying to get user data.'));
  }
}

export const updateWatchlist = (watchlist, company, action, navigation) => async dispatch => {
  try {
    let updatedWatchlist = [];
    if (action === 'add') {
      updatedWatchlist = [...watchlist, company];
    } else {
      updatedWatchlist = watchlist.filter(watchlistCompany => watchlistCompany.ticker !== company.ticker);
    }
    const token = await AsyncStorage.getItem('token');
    if (token) {
      const response = await axios.put(`${baseURL}/api/user/watchlist`, { watchlist: updatedWatchlist }, { headers: { Authorization: `Bearer ${token}` } });
      dispatch({ type: UPDATE_WATCHLIST, payload: response.data });
    } else {
      navigation.navigate('LogIn');
    }
  } catch (error) {
    console.log(error.message);
    dispatch(setError('Something went wrong getting user data.'));
  }
}