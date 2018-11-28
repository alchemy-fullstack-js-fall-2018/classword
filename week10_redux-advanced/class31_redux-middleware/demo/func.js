function add(a, b) {
  return a + b;
}

const curryAdd = a => b => add(a, b);

function curryAdd(a) {
  return function(b) {
    return {
      add: add(a, b)
    };
  };
}

const Two = curryAdd(2); // partial of add(a, b)
const partialTwo = add.bind(null, 2);

Two.add(5);

function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

function hypotenuse(a, o) {
  return function thunk() {
    return Math.sqrt(a * a + o * o);
  };
}

const getHypo = hypotenuse(3, 4);

// forgets about 3 and 4

getHypo();


// index.js
require('dotenv').config;

function get(apiKey) {
  return function() {
    fetch(`http://server.com?key=${apiKey}`)
  };
}

module.exports = get(process.env.API_KEY);


// Another file

const get = require('.index.js');

get()
  .then()
