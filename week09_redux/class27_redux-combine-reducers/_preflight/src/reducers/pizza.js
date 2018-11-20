import {
  MAKE_CHEESE_PIZZA,
  MAKE_PEPPERONI_PIZZA,
  SELL_CHEESE_PIZZA,
  SELL_PEPPERONI_PIZZA
} from '../actions/pizza';

const initialState = {
  cheese: [],
  pepperoni: []
};

export default function reducer(state = initialState, { type }) {
  switch(type) {
    case MAKE_CHEESE_PIZZA:
      return { ...state, cheese: [...state.cheese, new Date()] };
    case MAKE_PEPPERONI_PIZZA:
      return { ...state, pepperoni: [...state.pepperoni, new Date()] };
    case SELL_CHEESE_PIZZA:
      return { ...state, cheese: [...state.cheese.slice(1)] };
    case SELL_PEPPERONI_PIZZA:
      return { ...state, pepperoni: [...(state.pepperoni.slice(1))] };
    default:
      return state;
  }
}
