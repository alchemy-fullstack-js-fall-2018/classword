import { SODA_SELL_RC, SODA_BUY_RC } from '../actions/soda';

const initialState = {
  coke: [],
  pepsi: [],
  josta: [],
  rc: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SODA_SELL_RC:
      return { ...state, rc: [...state.rc.slice(1)] };
    case SODA_BUY_RC:
      return { ...state, rc: [...state.rc, action.payload] };
    default:
      return state;
  }
}
