function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
const counter2 = createCounter();

console.log(createCounter());

console.log(counter());
console.log(counter2());
console.log(counter());
console.log(counter2());
