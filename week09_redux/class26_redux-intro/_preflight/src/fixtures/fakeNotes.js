// This file exists for demo purposes only!

import uuid from 'uuid/v4';
import Chance from 'chance';

const chance = new Chance();
chance.mixin({
  note: () => ({
    title: chance.pickone([chance.city(), chance.name(), chance.animal(), chance.street()]),
    body: chance.paragraph()
  })
});

export default Array.apply(null, { length: 1000 })
  .reduce(acc => {
    acc[uuid()] = chance.note();
    return acc;
  }, {});
