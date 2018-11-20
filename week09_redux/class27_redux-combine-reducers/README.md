# Redux continued

## Agenda

* Pizza store in one file
  * Actions
    * `MAKE_CHEESE_PIZZA`
    * `MAKE_PEPPERONI_PIZZA`
    * `SELL_CHEESE_PIZZA`
    * `SELL_PEPPERONI_PIZZA`
  * Reducer
  * `getState`
  * `dispatch`
  * `subscribe`
* Move reducer and actions into folder
* Add soda reducer and actions
* Combine reducer and add to store
* Add transactions reducer
  * Note: Actions can be handled by multiple reducers
* Write `App.js`
* Write `index.js`
* Write `Pizzas.js`
  * Presentational component
* `connect` the `subscribe` for react
  * Write `AllPizzas.js`
    * Write selector
    * Container
  * Write `CheesePizzas.js`
    * Write selector
    * Container
  * Write `PepperoniPizzas.js`
    * Write selector
    * Container
* Write `Transactions.js`
  * Presentation
* Write `AllTransactions.js`
  * Container
* `dispatch`ing actions
  * Write `Home` Container
  * List Transactions
  * Add button to sell pizzas
* Performance
  * PureComponent vs Component vs Functional Component
  * Memoization
  * reselect
