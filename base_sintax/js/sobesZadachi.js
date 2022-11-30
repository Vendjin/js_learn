// postfix
// let x = 5;
// // alert(x++);
// console.log(x);

console.log([] + false - null + true);

let y = 1;
let x = y = 2;
// alert(x);

console.log(typeof ([] + 1));
console.log([] + 1 + 2);

console.log('1'[0]);

// && запинается на лжи - вернет на чем запнулся
console.log(2 && 1 && null && 0 && undefined);

// true           2
console.log(!!(1 && 2) === (1 && 2));
console.log(!!(1 && 2));
console.log((1 && 2));

// или запинается на правде
//                     3
//         null || 3
//                      3 || 4
console.log(null || 2 && 3 || 4);

// это разные хранилища поэтому не равны
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a === b);

// инфинити это бесконечность, что можно перевести в числовой тип
console.log(+'Infinity');

console.log("Ёжик" > "яблоко");

console.log(0 || "" || 2 || undefined || true || false);