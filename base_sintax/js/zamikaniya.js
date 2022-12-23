// замыкание функций и лексическое окружение
'use strict';

// let number = 5;
//
// function logNumber(){
//     let number = 4;
//     console.log(number);
// }
//
// number = 10;
// logNumber();

function createCounter() {
    let counter = 0;

    const myFunction = function () {
        counter += 1;
        if (counter > 4){
            counter = 0
        }
        return counter;
    }


    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
const c4 = increment();
const c5 = increment();

console.log(c1, c2, c3, c4, c5);

function foo(a,b) {
    const [first] = a;
    const {eng} = b;

    return `${first} ${eng}`;
}

const result = foo(['Hello', 'Привет', 'hi'], {ru: 'Мир', eng: 'World'})
console.log(result)


function myCounter(way) {
    let counter = 1;
    if (way === 'next') {
        return function () {
            if (counter > 3) {
                counter = 0
            }
            return counter++;
        };
    } else if (way === 'prev'){
        return function () {
            if (counter > 3) {
                counter = 0
            }
            return Math.abs(counter--);
        };
    }
}

const i = myCounter();
const cc1 = i();
const cc2 = i();
const cc3 = i();
const cc4 = i();
const cc5 = i();

console.log(cc1, cc2, cc3, cc4, cc5);