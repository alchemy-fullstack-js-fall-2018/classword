import Chance from 'chance';
import uuid from 'uuid/v4';
import { UPDATE_CLOTHES_SEARCH_TERM } from '../actions/clothes';

const chance = new Chance();

const fakeClothes = Array.apply(null, { length: 1000 })
  .map(() => ({
    type: chance.pickone(['shirt', 'jeans', 'slacks']),
    color: chance.pickone(['black', 'blue', 'yellow', 'red', 'green', 'white'])
  }))
  .reduce((acc, c) => {
    acc[uuid()] = c;
    return acc;
  }, {});


const initialState = {
  searchTerm: '', // Filter clothes by term
  list: fakeClothes // my actual clothes
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_CLOTHES_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
}
