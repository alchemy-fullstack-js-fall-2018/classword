import { createStore } from 'redux';
import reducer from './reducers'; // same as './reducers/index'
import {
  makeCheesePizza,
  makePepperoniPizza,
  sellCheesePizza,
  sellPepperoniPizza
} from './actions/pizza';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  store.getState();
  console.log('State Changes!');
});

console.log(store.getState());

store.dispatch(makeCheesePizza(new Date, 1.25));
console.log('Made a cheese pizza', store.getState());

store.dispatch(makeCheesePizza(new Date, 1.05));
console.log('Made another cheese pizza', store.getState());

store.dispatch(makePepperoniPizza(new Date, 1.35));
console.log('Made a pepperoni pizza', store.getState());

store.dispatch(sellCheesePizza(new Date, 10.35));
console.log('Sold a cheese pizza', store.getState());

store.dispatch(sellPepperoniPizza(new Date, 13.35));
console.log('Sold a pepperoni pizza', store.getState());

export default store;
