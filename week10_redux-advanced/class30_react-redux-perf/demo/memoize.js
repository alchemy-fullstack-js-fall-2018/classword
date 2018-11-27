function memoize(fn) {
  const cache = {};

  return function() {
    const args = [...arguments];
    const hash = hashArguments(args);

    if(!cache[hash]) cache[hash] = fn.apply(null, args);

    return cache[hash];
  };
}

function hashArguments(args) {
  return args.join('--');
}


function add(a, b) {
  console.log('called');
  return a + b;
}


const memoAdd = memoize(add);

console.log(memoAdd(1, 2));
console.log(memoAdd(1, 2));
console.log(memoAdd(2, 5));
console.log(memoAdd(2, 5));
console.log(memoAdd(1, 2));
