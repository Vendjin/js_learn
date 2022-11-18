'use strict';


// Числа
let number = 4.6;
// вернет тип infinity => бесконечный
console.log(4/0);

// вернет NaN not a number
console.log('string' * 5);


// СТРОКА
const persone = 'Alex';


// Логический тип данных Bool true / false
const bool = true;

// вернет null => не существует
// console.log(undefine);

// тип undefined тип данных когда объект не имеет никакого значения
let und;
console.log(und);


// объект это коллекция данных, структура которая служит для хранения
// всех типов данных, массив является частным случаем типа объект
let obj = {
    name: 'User',
    age: 25,
    isMarried: false
};
// получить элемент объекта
console.log(obj.age);
console.log(obj["name"]);

let arr = ['one', 'two', 'three', 4, false, {}, []];
console.log(arr[0])

// добавления нового свойства в объект
obj.b = '1234';
console.log(obj.b)
