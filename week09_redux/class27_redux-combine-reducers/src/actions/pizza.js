export const MAKE_PIZZA = 'MAKE_PIZZA';
// Action Creator
const makePizza = (created, cost, pizzaType) => {
  return {
    type: MAKE_PIZZA,
    payload: {
      pizzaType,
      created,
      cost
    }
  };
};

export const makeCheesePizza = (created, cost) => {
  return makePizza(created, cost, 'cheese');
};

export const makePepperoniPizza = (created, cost) => {
  return makePizza(created, cost, 'pepperoni');
};

export const SELL_CHEESE_PIZZA = 'SELL_CHEESE_PIZZA';
export const sellCheesePizza = (soldTime, price) => ({
  type: SELL_CHEESE_PIZZA,
  payload: { soldTime, price }
});

export const SELL_PEPPERONI_PIZZA = 'SELL_PEPPERONI_PIZZA';
export const sellPepperoniPizza = (soldTime, price) => ({
  type: SELL_PEPPERONI_PIZZA,
  payload: { soldTime, price }
});
