// цепочка из функций которой передаем один аргумент

const composeFns = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);

const composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const discount = composeFns(normalizePrice, divide100, multiply20);
console.log(discount(200.0));


const add1 = function(a){
  console.log('A=', a)
  return a + 2
}

const addAll3 = function(a,b,c){
  console.log('a= ', a);
  return a + b + c
}

console.log(composeWithArgs(add1,addAll3)(1,2,3));