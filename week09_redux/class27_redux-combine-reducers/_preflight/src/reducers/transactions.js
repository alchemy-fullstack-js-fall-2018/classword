import { SELL_CHEESE_PIZZA, SELL_PEPPERONI_PIZZA } from '../actions/pizza';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SELL_CHEESE_PIZZA:
      return [...state, new Date()];
    case SELL_PEPPERONI_PIZZA:
      return [...state, new Date()];
    default:
      return state;
  }
}
