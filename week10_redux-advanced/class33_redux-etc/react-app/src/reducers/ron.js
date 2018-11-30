import { GET_RON_FACTS, GET_RANDOM_RON_FACT } from '../actions/ron';

const initialState = {
  randomFact: '',
  facts: []
}

export default function ronducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_RON_FACTS:
      return { ...state, facts: payload };
    case GET_RANDOM_RON_FACT:
      return { ...state, randomFact: payload };
    default:
      return state;
  }
}
