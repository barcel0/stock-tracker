import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import userReducer from './userReducer';
import companyReducer from './companyReducer';

export default combineReducers({
  api: apiReducer,
  user: userReducer,
  company: companyReducer,
});