export const getCheesePizzas = state => {
  return [...state.pizza.cheese];
};

export const getPepperoniPizzas = state => {
  return [...state.pizza.pepperoni];
};

export const getPizzas = state => {
  return [...getCheesePizzas(state), ...getPepperoniPizzas(state)];
};
