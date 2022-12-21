'use strict';

const arr = [1, 2, 3, 4, 5];

// удаляем последний элемент массива
arr.pop();
console.log(arr);

// добавляем элемент в конец
arr.push('5');
console.log(arr);

// перебор циклом
for (let i = 0; i < arr.length; i++){
    console.log(i, arr[i]);
}

// for of отдает значение в массиве
for ( let value of arr){
    console.log(value);
}

// for in это индексы, количество раз
for ( let i in arr){
    console.log(i, arr[i]);
}

// гибко перебирает все элементы массива, применяет какие либо действия для каждого элемента массива, это коллбек функция
arr.forEach(function (item, index, arr){
    console.log(`${index}: ${item} внутри массива ${arr}`);
})

let a = 'a b c d';
let convertToArr = a.split(' ');
console.log(convertToArr);

let convertToStr = convertToArr.join('|');
console.log(convertToStr);

// изначально сортирует по первому символу - цифре
let testNumbersArr = [3, 0, 1, 4, 7, 10, 11, 26];
testNumbersArr.sort();
console.log(testNumbersArr);

let testLettersArr = ['aa', 'ac', 'ba', 'aaa', 'ab'];
console.log(testLettersArr.sort());


function compareNum(a, b) {
    return a - b;
}

console.log(testNumbersArr.sort(compareNum));


