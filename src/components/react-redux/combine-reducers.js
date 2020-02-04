import { combineReducers } from 'redux';
import search from './search-reduser';
import data from './store';

export default combineReducers({
  search,
  data,
});