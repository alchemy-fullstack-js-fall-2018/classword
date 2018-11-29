export default store => next => action => {
  if(action is a promise) {
    action.then(results => {
      next({
        type: action.type,
        payload: results
      })
    })
  } else {
    return next(action);
  }
}
