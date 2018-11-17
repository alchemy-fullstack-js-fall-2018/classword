import reducer from './index';
import { ADD_NOTE } from '../actions/notes';

describe('reducer', () => {
  it('can add a note', () => {
    const note = {
      title: 'My First Note',
      body: 'This is a note. I like writing notes!'
    };

    const updatedState = reducer([], { type: ADD_NOTE, payload: note });
    expect(Object.values(updatedState)).toHaveLength(1);
    expect(Object.values(updatedState)).toContainEqual(note);
  });
});
