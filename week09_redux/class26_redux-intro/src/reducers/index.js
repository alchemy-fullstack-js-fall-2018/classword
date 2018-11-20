import uuid from 'uuid/v4';
import { ADD_NOTE } from '../actions/notes';

// list of notes
const initialState = {
  [uuid()]: { title: 'Hi Note', body: 'My body' },
  [uuid()]: { title: 'No Note', body: 'My body' }
};

export default function reducer(state = initialState, { type, payload }) {
  // if(action.type === "EXAMPLE_ACTION") {
  //   return [...state, 1];
  // } else {
  //   return state;
  // }

  switch(type) {
    case ADD_NOTE:
      //const id = uuid();
      return { ...state, [uuid()]: payload };
    default:
      return state;
  }
}
