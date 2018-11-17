import { addNote, ADD_NOTE } from './notes';

describe('notes action creators', () => {
  it('creates an ADD_NOTE action', () => {
    const note = {
      title: 'A note on action creators',
      body: 'Action creator help us reliable and consistently create actions'
    };

    const action = addNote(note);
    expect(action.type).toEqual(ADD_NOTE);
    expect(action.payload).toEqual(note);
  });
});
