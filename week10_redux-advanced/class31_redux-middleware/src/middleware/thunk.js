export const thunk = store => next => action => {
  next(action);
};
