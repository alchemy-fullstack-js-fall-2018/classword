import { addNote, ADD_NOTE } from './notes';

describe('notes actions', () => {
  it('can create a note action', () => {
    const note = {
      title: 'We are making action',
      body: 'This is a note'
    };

    const action = addNote(note);
    expect(action.type).toEqual(ADD_NOTE);
    expect(action.payload).toEqual(note);
  });
});
