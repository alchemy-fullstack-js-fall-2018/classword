export const getNotes = state => {
  return Object.keys(state).map(id => {
    return { ...state[id], id };
  });
};

export const getNote = (state, id) => {
  return state[id];
};

export const getNotesByTitle = state => {
  return [...getNotes(state)].sort((note1, note2) => {
    if(note1.title > note2.title) return 1;
    return -1;
  });
};

export const getNotesByLength = state => {
  return [...getNotes(state)].sort((note1, note2) => note2.body.length - note1.body.length);
};

export const getSearchNotes = (state, searchTerm) => {
  return getNotes(state).filter(note => note.title.startsWith(searchTerm));
};
