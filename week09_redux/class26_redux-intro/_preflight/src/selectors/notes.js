export const getNotes = state => {
  return Object.keys(state).map(id => {
    return { ...state[id], id };
  });
};

export const getNote = (state, id) => {
  return state[id];
};

export const getSearchNotes = (state, searchTerm) => {
  return getNotes(state).filter(note => note.title.startsWith(searchTerm));
};
