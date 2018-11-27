function add(a, b) {
  return a + b;
}

// function curryAdd(a) {
//   return function(b) {
//     return add(a, b);
//   };
// }

const curryAdd = a => b => add(a, b);
const add2 = curryAdd(2);

console.log(add2(7));
