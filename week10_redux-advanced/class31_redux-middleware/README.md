# Redux Middleware

## Agenda

* Review lab
* Higher order function quick review
* Promises
  * states
    * `pending`
    * `fulfilled`
    * `rejected`
  * Static Methods
    * `race`
    * `all`
    * `reject`
    * `resolve`
  * Instance methods
    * `then`
    * `catch`
  * Demo: Promise from callback
* Redux Middleware
  * Happens between dispatch and reducer
  * Demo `applyMiddleware`
  * Use cases
    * Logging
    * Crash reporting
    * async (thunk)
    * promise actions
* Exercise: redux logger
* Exercise: redux thunk middleware
* Jest mocking
  * DEMO: `getArtists` mock
  * DEMO: `getArtist` mock
* Test out some async stuff
