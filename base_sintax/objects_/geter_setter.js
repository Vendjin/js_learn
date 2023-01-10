'use strict';

let  persone = {
    name: 'alex',
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
}

// при использовании гетера не использует ()
console.log(persone.userAge);

persone.userAge = 30;
console.log(persone.userAge);