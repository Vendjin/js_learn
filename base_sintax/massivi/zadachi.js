'use strict';

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(item => item.rating >= 8);
}

console.log(showGoodFilms(films));

// выборка строк из списка объектов
function showListOfFilms(arr) {
    return arr.reduce((acc, curr) => `${typeof (acc) === 'object' ? acc.name : acc}, ${curr.name}`);
    // return arr.reduce((acc, curr) => `${acc}, ${curr.name}`);
}

console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    return arr.map((item, iter) => {
        item.id = iter;
        return item;
    });
}

console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

// При срабатывании every на первом фильме он натыкается на id = 0;
// 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
function checkFilms(arr) {
    return arr.every(item => item.id || item.id === 0);
}

console.log(checkFilms(tranformedArray));


const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

// Суммирование чисел из списка объектов
const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0)

};

console.log(getPositiveIncomeAmount(funds));

function getSumRatingFilms(arr) {
    return arr.reduce((acc, curr) => acc + curr.rating, 0);
}

console.log(getSumRatingFilms(films));

//Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных.
// Если хотя бы один из объектов содержит отрицательное значение поля amount,
// то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается
// функция getPositiveIncomeAmount с тем же массивом данных.
const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
}
