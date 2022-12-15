'use strict';

// это пример функции конструктора => на выходе получается объект
function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function (){
        console.log(`Hello ${this.name}`);
    }
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.hello();

console.log(ivan);
console.log(alex);

// метод exit появится у всех экземпляров которые будут объявлены после этого метода
User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} вышел`);
}

const oleg = new User('Oleg', 22);
console.log(oleg);
oleg.exit();

for (let olegKey in oleg) {
    console.log(olegKey);
}