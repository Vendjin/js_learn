'use strict';

let str = 'some';
let strObj = new String(str);

console.log(typeof str);
console.log(typeof strObj);

const solder = {
    health: 400,
    armor: 100,
    sayHello: function (){
        console.log('Hello');
    }
};

const jonh = {
    health: 100
};

// указываем наследование после создания прототипа и наследника
Object.setPrototypeOf(jonh, solder);
jonh.sayHello();

// создаем наследника и сразу наследуем
const Nick = Object.create(solder);
console.log(Nick.armor);