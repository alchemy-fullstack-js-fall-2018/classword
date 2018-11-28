# Thunk middleware

## Test

* test your middleware
  * create a mock reducer with `const reducer = jest.fn()`
  * create a store using the mock reducer
    `const store = createStore(reducer, applyMiddleware(promiseMiddleware))`
  * Test successful promise (use `Promise.resolve` as payload)
    * `LOAD_START` action is sent
    * `LOAD_END` action is sent
    * `PROMISE_ACTION` action is sent
  * Test unsuccessful promise (use `Promise.reject` as payload)
    * `LOAD_END` action is sent
    * `ERROR` action is sent

## Middleware

* Check if the action is a function
  * use `typeof` to check the actions type
* if the payload is not a function return `next(action)`
* if the payload is a function invoke the function passing
  in the `dispatch` and `getState` functions.
