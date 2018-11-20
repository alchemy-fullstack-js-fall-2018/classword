# Redux

## Agenda

* Note about Container vs Presentational
  * Let's start explicitly separating these components
  * `containers` folder
  * `components` folder
* Intro to redux
  * [Philosophy](https://redux.js.org/introduction/threeprinciples)
  * Single source of truth
  * State is read only
  * State is transformed by actions
* Diagram state transformation
* A note about testability
* Reducers
  * Used to transform from previous state to new state
  * Test
  * Create
* Action creators
  * Used to indicate to a reducer that state needs to change
  * Test
  * Create
* Selectors
  * Used to get data from store (state)
  * Test
  * Create
* Refactor
  * Notes should have an id
  * Refactor Reducer
    * Update initial state ()
    * Update reducers test (`Object.values`)
    * on `ADD_NOTE` create `uuid` with payload
  * Refactor Selector
    * Continue returning an array
    * Mock state has id
    * `expect` id in `getNotes`
* Redux devtools
* Demo: let's `connect` this up
  * Write `App.js` with router, but without routes
  * Write `store.js`
    * This is where our state will be stored
    * `createStore` from a reducer.
      * tells store what it should contain (its state)
      * tells store how to transform (update state)
  * Write `index.js`
    * `Provider` to provides our store to `<App />`
  * Write `NoteList.js`
    * Use `PropTypes`
  * Write `NoteForm.js`
    * Use `PropTypes`
  * Write `AllNotes.js`
    * This is a container component
    * Write `mapStateToProps`
      * Connects our redux state and injects as props
    * Use selectors to get all notes
    * Use `connect` to connect container with presentation
    * NOTE: We can reuse `NoteList.js` to display filtered notes.
  * Write `Home.js`
    * add to routes
  * Write `AddNoteForm.js`
    * This is a container component
      * Not making a presentational component because it wouldn't be reusable
    * Mixing redux with react state
    * empty `mapStateToProps`
    * Write `mapDispatchToProps`
      * Inject our action creators as props
    * Use `connect` to connect container with presentation
  * Write `Note.js`
    * Use `PropTypes`
    * Add Note to routes
  * Write `getSearchNotes` selector
    * Test first!
    * Use `getNotes` selector
      * Compose on previous work!
    * Use `filter` to filter notes
  * Write `NotesByTitle.js`
    * Very similar to `AllNotes.js`
    * Change selector
    * Add to routes
    * Add to Header
  * Write `NotesByLength.js`
    * Very similar to `AllNotes.js`
    * Change selector
    * Add to routes
    * Add to Header
  * Write `HiNotes.js`
    * Very similar to `AllNotes.js`
    * Change selector
    * Add to routes
    * Add to Header
