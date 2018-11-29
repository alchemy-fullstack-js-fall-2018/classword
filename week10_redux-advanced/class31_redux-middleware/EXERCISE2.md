# Thunk middleware

## Test

* test your middleware
  * create a mock reducer with `const reducer = jest.fn()`
  * create a store using the mock reducer
    `const store = createStore(reducer, applyMiddleware(thunkMiddleware))`
  * Dispatch a function:
    ```
      const actionFn = jest.fn();
      store.dispatch(actionFn);
    ```
    * test that `actionFn` receives `dispatch` and `getState`

## Middleware

* Check if the action is a function
  * use `typeof` to check the actions type
* if the payload is not a function return `next(action)`
* if the payload is a function invoke the function passing
  in the `dispatch` and `getState` functions.
