import { combineReducers } from 'redux';
import pizzaReducer from './pizza';
import sodaReducer from './soda';
import transactionReducer from './transactions';

export default combineReducers({
  pizza: pizzaReducer,
  soda: sodaReducer,
  transactions: transactionReducer
});
