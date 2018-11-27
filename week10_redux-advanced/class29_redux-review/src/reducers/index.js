import { combineReducers } from 'redux';
import search from './search';
import color from './color';

export default combineReducers({
  search,
  color
});
