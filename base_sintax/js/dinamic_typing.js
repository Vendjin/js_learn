'use strict';

console.log(typeof String(null));
console.log(String(null));
console.log(4 + 'четыре');

// to NUMBER
console.log(typeof Number('4'));
console.log(typeof (+'5'));
console.log(typeof parseInt('15px', 10));
// let answer = +prompt('write number');


// to Boolean
// all false
//  0, '', null, undefined, NaN;

// all True
// [], {}
let switcher = null;
switcher = 1

if (switcher) {
    console.log('Working...');
}

console.log(typeof Boolean('4'));
console.log(typeof (!!"444"));