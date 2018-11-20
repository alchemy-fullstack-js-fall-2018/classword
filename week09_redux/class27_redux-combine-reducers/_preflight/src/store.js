import { createStore } from 'redux';
import reducers from './reducers';
import {
  makeCheesePizza,
  makePepperoniPizza,
  sellCheesePizza,
  sellPepperoniPizza
} from './actions/pizza';
import { getPizza, getPizzaSlowly, getPizzaMemo } from './selectors/pizza';

const store = createStore(reducers);

store.subscribe(() => {
  console.log('subscriber noticed a change!');
});

console.log('initial state', store.getState());

store.dispatch(makeCheesePizza());
console.log('make cheese pizza', store.getState());

store.dispatch(makeCheesePizza());
console.log('make another cheese pizza', store.getState());

store.dispatch(makePepperoniPizza());
console.log('make a pepperoni pizza', store.getState());


store.dispatch(sellCheesePizza());
console.log('sell a cheese pizza', store.getState());

store.dispatch(sellPepperoniPizza());
console.log('sell a pepperoni pizza', store.getState());

store.dispatch(makeCheesePizza());
store.dispatch(makeCheesePizza());
store.dispatch(makeCheesePizza());
store.dispatch(makeCheesePizza());
store.dispatch(makeCheesePizza());
Array.apply(null, { length: 50000 }).forEach(() => store.dispatch(makeCheesePizza()));
// selectorPerformance(getPizzaSlowly, store.getState());
// selectorPerformance(getPizzaSlowly, store.getState());
// selectorPerformance(getPizzaSlowly, store.getState());

selectorPerformance(getPizzaMemo, store.getState());
selectorPerformance(getPizzaMemo, store.getState());
selectorPerformance(getPizzaMemo, store.getState());

function selectorPerformance(selector, state) {
  const start = process.hrtime.bigint();
  const result = selector(state);
  const end = process.hrtime.bigint();
  console.log('PERFORMANCE', end - start);
  return result;
}
