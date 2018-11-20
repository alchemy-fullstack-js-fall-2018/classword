export const SODA_BUY_RC = 'SODA_BUY_RC';
export const buyRCSoda = cost => {
  return {
    type: SODA_BUY_RC,
    payload: cost
  };
};

export const SODA_SELL_RC = 'SODA_SELL_RC';
export const sellRCSoda = price => {
  return {
    type: SODA_SELL_RC,
    payload: price
  };
};
