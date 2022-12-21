'use strict';
// контекст вызовов
// 1 Обычный вызов функции: this = window, но если 'use strict' - undefined
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis(1, 2);


// 2 Контекст вызова у методов объекта ссылается на сам объект
const obj = {
    a: 20,
    b: 20,
    sum: function () {
        console.log(this);
    }
}

obj.sum();

function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function (){
        console.log(`Hello ${this.name}`);
    }
}

// 3 this в конструкторах и классах - это новый экземпляр объекта
let  ivan = new User('Ivan', 23);
console.log(ivan);

// 4 Ручное присвоение this функции через call, applay, bind
function sayName(surname) {
    console.log(this)
    console.log(this.name + surname);
}

const user = {
    name : 'John'
};

sayName.call(user, 'smith');
sayName.apply(user, ['smith']);


function count(num){
    return this*num;
}

const double = count.bind(2);

console.log(double(3))

const btn = document.querySelector("button");

btn.addEventListener('click', function (evt){
    console.log(evt.target);
    console.log(this);
});

const myObj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
            console.log(this.num);
        }

        say();
    }
}
myObj.sayNumber();


// краткий вид стрелочной функции, если она делает всего 1 действие
const calc = (a) => a * 2;
