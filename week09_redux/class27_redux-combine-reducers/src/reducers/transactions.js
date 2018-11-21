import { SELL_CHEESE_PIZZA, SELL_PEPPERONI_PIZZA } from '../actions/pizza';

const initialState = [];

export default func tion reducer(state = initialState, action) {
  switch(action.type) {
    case SELL_CHEESE_PIZZA:
    case SELL_PEPPERONI_PIZZA:
      return [...state, { ...action.payload, type: action.type }];
    default:
      return state;
  }
}
