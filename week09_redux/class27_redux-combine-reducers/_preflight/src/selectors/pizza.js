import { createSelector } from 'reselect';

export const getCheesePizza = state => {
  return state.pizza.cheese;
};

export const getPepperoniPizza = state => {
  return state.pizza.pepperoni;
};

export const getPizza = state => {
  return getCheesePizza(state).concat(getPepperoniPizza(state));
};

export const getPizzaSlowly = (cheese, pepperoni) => {
  let pizzas = [];
  for(let i = 0; i <= cheese.length; i++) {
    for(let j = 0; j <= cheese.length; j++) {
      if(!pizzas.some(p => p === cheese[i])) {
        pizzas.unshift(cheese[i]);
      }
    }
  }

  for(let i = 0; i <= pepperoni.length; i++) {
    for(let j = 0; j <= pepperoni.length; j++) {
      if(!pizzas.some(p => p === pepperoni[i])) {
        pizzas.unshift(pepperoni[i]);
      }
    }
  }
  return pizzas;
};

export const getPizzaMemo = createSelector(
  getCheesePizza,
  getPepperoniPizza,
  getPizzaSlowly
);
