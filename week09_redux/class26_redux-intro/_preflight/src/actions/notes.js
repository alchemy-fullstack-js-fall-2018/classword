export const ADD_NOTE = 'ADD_NOTE';
export const addNote = ({ title, body }) => ({
  type: ADD_NOTE,
  payload: { title, body }
});
