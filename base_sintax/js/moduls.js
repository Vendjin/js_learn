'use strict';

// 1 способ создания модулей нативным js

// number - переменная в глобальной области видимости
const number = 1;

// анонимная само вызывающаяся функция
(function () {
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number, 'outside')


// 2 способ использование объектного интерфейса
// наш модуль записывам в переменную, в нем уже возвращаем методы дсотупные снаружи

const user = (function() {
    const privat = function (){
        console.log('I private function')
    };

    // используем объектый интерфейс
    return {
        sayHello: privat
    }
} ());


user.sayHello();