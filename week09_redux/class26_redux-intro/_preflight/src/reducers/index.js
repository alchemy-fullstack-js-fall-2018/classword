import { ADD_NOTE } from '../actions/notes';
import uuid from 'uuid/v4';

const initialState = {
  abcd1234: { title: 'My First Note', body: 'This is an initial note' }
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case ADD_NOTE:
      return { ...state, [uuid()]: payload };
    default:
      return state;
  }
}
