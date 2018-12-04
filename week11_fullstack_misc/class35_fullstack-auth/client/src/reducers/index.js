import { combineReducers } from 'redux';
import polls from './polls';
import results from './results';
import session from './session';

export default combineReducers({
  polls,
  results,
  session
});
