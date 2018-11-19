import {
  getNotes,
  getNote,
  getNotesByTitle,
  getNotesByLength,
  getSearchNotes
} from './notes';

const notes = {
  a: {
    title: 'Selectors',
    body: 'Selectors make retrieving things from the store easier'
  },
  b: {
    title: 'Select data',
    body: 'Selectors can select all or some data from our state'
  },
  c: {
    title: 'Deriving data',
    body: 'Selectors add reliability and consistency to deriving data from the store'
  }
};

describe('notes selectors', () => {
  it('retrieves all notes from state', () => {
    expect(getNotes(notes)).toContainEqual({ id: 'a', ...notes.a });
    expect(getNotes(notes)).toContainEqual({ id: 'b', ...notes.b });
    expect(getNotes(notes)).toContainEqual({ id: 'c', ...notes.c });
  });

  it('retrieves a note by id', () => {
    Object.keys(notes).forEach(id => {
      expect(getNote(notes, id)).toEqual(notes[id]);
    });
  });

  it('retrieves notes sorted by title', () => {
    expect(getNotesByTitle(notes)).toEqual([
      {
        id: 'c',
        title: 'Deriving data',
        body: 'Selectors add reliability and consistency to deriving data from the store'
      },
      {
        id: 'b',
        title: 'Select data',
        body: 'Selectors can select all or some data from our state'
      },
      {
        id: 'a',
        title: 'Selectors',
        body: 'Selectors make retrieving things from the store easier'
      }
    ]);
  });

  it('retrieves notes sorted by body length', () => {
    expect(getNotesByLength(notes)).toEqual([
      {
        id: 'c',
        title: 'Deriving data',
        body: 'Selectors add reliability and consistency to deriving data from the store'
      },
      {
        id: 'a',
        title: 'Selectors',
        body: 'Selectors make retrieving things from the store easier'
      },
      {
        id: 'b',
        title: 'Select data',
        body: 'Selectors can select all or some data from our state'
      }
    ]);
  });

  it('retrieves notes that start with a searchTerm', () => {
    expect(getSearchNotes(notes, 'Sel')).toEqual([
      {
        id: 'a',
        title: 'Selectors',
        body: 'Selectors make retrieving things from the store easier'
      },
      {
        id: 'b',
        title: 'Select data',
        body: 'Selectors can select all or some data from our state'
      }
    ]);
  });
});
