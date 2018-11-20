import { combineReducers } from 'redux';
import pizza from './pizza';
import transactions from './transactions';

export default combineReducers({
  pizza,
  transactions
});
