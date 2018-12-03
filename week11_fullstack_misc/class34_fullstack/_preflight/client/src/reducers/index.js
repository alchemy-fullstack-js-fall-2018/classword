import { combineReducers } from 'redux';
import polls from './polls';
import results from './results';

export default combineReducers({
  polls,
  results
});
