'use strict';
let myId = Symbol('myId');

const obj = {
    'name': 'Test',
    [myId]: 2,
    getId: function () {
        return this[myId]
    },
    [Symbol('sym')]: 123,
    // глобальный символ
    [Symbol.for('globSym')]: 'globalSymbol'
};


let id = Symbol('id');
obj[id] = 1;

console.log(obj)
console.log(obj[id]);


console.log(obj.getId());
console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[Object.getOwnPropertySymbols(obj)[1]]);


console.log(obj[Symbol.for('globSym')]);