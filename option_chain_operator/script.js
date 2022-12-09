'use strict';

const box = document.querySelector('.box');
// элемент блок на странице отсутствует = null
const block = document.querySelector('.block');

console.log(block); // null

// делаем конструкцию из условия, что бы скрипт не падал
// if (block){
//     console.log(block.textContent);
// }
// можно сделать с помощью оператора опциональной цепочки, работает на чтение свойства
console.log(block?.textContent); // вернет undefined

// console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: 30,
    say: function (){
        console.log('hello');
    }
};

/*представим есть много объектов и в них есть skills и js, а то что дали нам  там его нет
вариант обхода проблемы через условие и через опциональную цепочку*/
// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

console.log(userData.skills?.js);

userData.say();
userData.hey?.();
