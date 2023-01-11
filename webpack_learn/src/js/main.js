// старый вариант использования модуля

/*function myModule() {
    this.hello = function () {
        console.log('hello');
    };

    this.goodBye = function () {
        console.log('bye!');
    };
}

module.exports = myModule;*/

// новый вариант импорта/ экспорта по стандарту ES6
export let one = 1;

let two = 2;
export {two};

export function sayHi(){
    console.log('hello');
}

// дефаулт может быть только 1
export default function defFunc() {
    console.log('default export')
}


