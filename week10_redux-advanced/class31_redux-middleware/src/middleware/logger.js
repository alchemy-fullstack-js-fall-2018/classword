export const logger = store => next => action => {
  // store.dispatch({
  //   type: 'NEW_ACTION',
  //   payload: 'nothing'
  // });

  // console.log(store.getState());

  // const previousState = store.getState();
  // const nextState = next(action);

  // return nextState;

  console.log(action);

  const previousState = store.getState();
  next(action);
  const newState = store.getState();

  if(previousState !== newState) {
    console.log(newState);
  }
};
