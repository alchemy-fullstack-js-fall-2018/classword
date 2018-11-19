import { ADD_NOTE } from '../actions/notes';
import fakeNotes from '../fixtures/fakeNotes';
import uuid from 'uuid/v4';

const initialState = fakeNotes;

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case ADD_NOTE:
      return { ...state, [uuid()]: payload };
    default:
      return state;
  }
}
