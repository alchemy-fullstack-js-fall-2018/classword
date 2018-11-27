function hypotenuse(o, a) {
  return function() {
    return Math.sqrt(o * o + a * a);
  };
}

const getHypotenuse = hypotenuse(3, 4);

console.log(getHypotenuse());
