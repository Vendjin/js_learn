'use strict';

const names = ['Ivan', 'Ann', 'Kseniya', 'Voldemart'];

// FILTER
// фильтр должен ВОЗВРАЩАТЬ (обязательно return)
const shortNames = names.filter(name => {
    return name.length <= 4
})

console.log(shortNames);

//MAP
// берет исходный массив и позволяет изменить каждый элемент в нем
const answers = ['IvAN', 'AnnA', 'Hello'];

// обычный вариант
/*const lowRegister = answers.map(item => {
    return item.toLowerCase();
})*/

// сокращенный вариант
const lowRegister = answers.map(item => item.toLowerCase());
console.log(lowRegister);


const lowRegister1 = answers.map((item, iter) => {
    item+=iter;
    return item
});
console.log(lowRegister1);

// если хотим изменить этот же массив, не создавая новый, то объявляем исходны массив через let, а не через const
let res = ['IvAN', 'AnnA', 'Hello'];
res = res.map(item => item.toLowerCase());
console.log(res);


// EVERY - все элементы отвечает условию, вернет true
// SOME - хотя бы 1 элемент отвечает условию
const some = [4, 'qwq', 'sfrefre'];
console.log(some.some(item => typeof item === 'number'));

console.log(some.every(item => typeof item === 'string'));


// REDUCE - схлопыват массив, в колбек функцию принимает 2 обязательных и 3 необязательное значение
// .reduce((sum, currentValue, [startValue])

const arr = [4, 5, 1, 3, 2, 6];

                        // 0            4
                        // 4            5
                        // 9            1
const sum = arr.reduce((sum, current) => sum + current);
console.log(sum);

const strArr = ['apple', 'pear', 'plum'];
const fruits = strArr.reduce((sum, currentValue) => `${sum}, ${currentValue}`);
console.log(fruits);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj).filter(item => item[1] === 'persone').map(item => item[0]);
console.log(newArr);

