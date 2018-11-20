import { SELL_CHEESE_PIZZA } from '../actions/pizza';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SELL_CHEESE_PIZZA:
      return [...state, { ...action.payload, type: SELL_CHEESE_PIZZA }];
    default:
      return state;
  }
}
