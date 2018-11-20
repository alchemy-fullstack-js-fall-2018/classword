export const getTransactions = state => {
  return state.transactions;
};

export const getGrossRevenue = state => {
  return getTransactions(state).reduce((acc, { price }) => {
    return acc + price;
  }, 0);
};
