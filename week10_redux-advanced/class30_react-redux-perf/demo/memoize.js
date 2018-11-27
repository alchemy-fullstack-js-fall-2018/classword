function memoize(fn) {
  const cache = {};

  return function() {
    const args = [...arguments];
    const hash = hashArguments(args);

    const cachedResult = cache[hash];
    if(cachedResult) return cachedResult;

    const result = fn.apply(null, args);
    cache[hash] = result;
    return result;
  };
}

function hashArguments(args) {
  return args.join('--');
}


function add(a, b) {
  console.log('WAS CALLED');
  return a + b;
}

const memoAdd = memoize(add);

console.log(memoAdd(4, 5));
console.log(memoAdd(4, 5));
console.log(memoAdd(3, 5));
console.log(memoAdd(4, 5));
console.log(memoAdd(4, 5));
console.log(memoAdd(3, 5));
