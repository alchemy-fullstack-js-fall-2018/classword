# Redux Review

## Agenda

* Review Single file redux
  * `getState` -> in react we map this into component props (mapStateToProps)
  * `dispatch` -> in react we use this to map actions into component props (mapDispatchToProps)
  * `subscribe` -> in react `connect` to watch for state changes
* Draw redux architecture
  * Store
  * Container - via selectors
  * Component - via mapStateToProps / mapDispatchToProps
  * Actions - via dispatch
  * Reducer - via actions
* Write a clothes reducer
  * Write an index reducer
  * Add reducers to store
* Write Clothes component
* Write `getClothes` selector
* Write `getTotalClothes` selector
* Write AllClothes container
* Add searchTerm to clothes state
* Add action to update searchTerm
  * Add action to reducer
* Write `getFilteredClothes`
* Write FilterClothes
