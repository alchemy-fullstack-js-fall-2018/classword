import {
  MAKE_PIZZA,
  SELL_CHEESE_PIZZA,
  SELL_PEPPERONI_PIZZA
} from '../actions/pizza';

const initialState = {
  cheese: [],
  pepperoni: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case MAKE_PIZZA:
      return { ...state, [action.payload.pizzaType]: [...state[action.payload.pizzaType], action.payload] };
    case SELL_CHEESE_PIZZA:
      return { ...state, cheese: [...state.cheese.slice(1)] };
    case SELL_PEPPERONI_PIZZA:
      return { ...state, pepperoni: [...state.pepperoni.slice(1)] };
    default:
      return state;
  }
}
