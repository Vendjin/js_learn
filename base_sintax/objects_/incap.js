'use strict';

function User(name, age) {
    this.name = name;
    let userAge = age
    // this.age = age;

    this.say = function () {
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
    };

    this.getAge = function () {
        return userAge;
    }
    this.setAge = function (age) {
        if (typeof age === 'number' && age > 0 && age < 90){
            userAge = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}


const  ivan = new User('Ivan', 27);
console.log(ivan.name);
console.log(ivan.getAge());

ivan.setAge(30);
ivan.say();

class ClassUser {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    say () {
        console.log(`Имя пользователя: ${this.name}, возраст ${this.age}`);
    }

    get age () {
        return this._age;
    }
    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 90){
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const alex = new ClassUser('alex', 22);
console.log(alex.age);
alex.age = 89;
alex.say();