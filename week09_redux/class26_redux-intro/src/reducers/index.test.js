import reducer from './index';
import { ADD_NOTE } from '../actions/notes';

describe('reducer', () => {
  it('returns the initial state', () => {
    const newState = reducer({}, {});
    expect(newState).toEqual({});
  });

  it('handles an ADD_NOTE action', () => {
    const note = {
      title: 'Reducer test',
      body: 'Reducer note in a test'
    };

    const action = {
      type: ADD_NOTE,
      payload: note
    };

    const newState = reducer({}, action);
    expect(Object.values(newState)).toContain(note);
  });
});
