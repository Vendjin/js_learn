'use strict';

const box = document.getElementById('box');
console.log(box);

// возвращает псевдомассив элементов по тегу
const buttons = document.getElementsByTagName('button');
console.log(buttons);
// взять элемент можно только по индексу
console.log(buttons[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

// у этого метода есть функционала forEach
const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
})

// возвращает только первый селектор на странице
const oneHeart = document.querySelector('.circle');
console.log(oneHeart);