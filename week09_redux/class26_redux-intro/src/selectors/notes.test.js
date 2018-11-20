import { getNotes } from './notes';

const state = {
  abcd1234: {
    title: 'This is a selector',
    body: 'We can select state with these'
  }
};

describe('notes selector', () => {
  it('gets a list of notes from state', () => {
    const expected = [
      {
        id: 'abcd1234',
        title: 'This is a selector',
        body: 'We can select state with these'
      }
    ];

    expect(getNotes(state)).toEqual(expected);
  });
});
