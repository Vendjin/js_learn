'use strict';

let a = 5,
    b = a;

console.log('a', a);
console.log('b', b);

b += 5;

console.log('a', a);
console.log('new_b', b);


const obj = {
    a: 5,
    b: 1
};
console.log('obj', obj);

// как в го создается не отдельная копия переменной, а указатель на ссылку, меняя ее меняется и родительский объект
const copy = obj;

copy.a = 10;
console.log('copy', copy);
console.log('new_obj', obj);

// варианты обхода этой проблемы

// вариант через функцию и через Object.assign делает только поверхностную копию, тке вложенные объекты будут копированы
// по ссылке, те поменяется и в изначальном объекте
function copyObj(mainObj) {
    let objCopy = {};

    for (let key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy
}

const numbers = {
    a: 2,
    b: 3,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyObj(numbers);
console.log(newNumbers);
newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);


const add = {
    d: 17,
    e: 20
}

console.log(Object.assign (numbers, add));

const clone = Object.assign({}, numbers);
clone.c.x = 10;
console.log(numbers);
console.log(clone);


//копирование массива с помощью slice
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'aa';
console.log(oldArray);
console.log(newArray);


// создание массива с добавлением других массивов использую спред-оператор
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

// передача в функцию много элементов
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5 ,7];

log(...num);

// еще 1 способ копирование массива, с помощью спред-оператора
const array = ['a', '2'];
const copArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newObj);