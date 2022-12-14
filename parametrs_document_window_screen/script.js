'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

const widthWithoutMargin = box.clientWidth;
const heightWithoutMargin = box.clientHeight;

console.log(widthWithoutMargin, heightWithoutMargin);

const widthMargin = box.offsetWidth;
const heightMargin = box.offsetHeight;

console.log(widthMargin, heightMargin);

const heightScroll = box.scrollHeight;
console.log(heightScroll);


btn.addEventListener('click', () =>{
    box.style.height = `${heightScroll}px`;
    // показывает сколько прикселей уже отлистал сверху
    console.log(box.scrollTop);
})


console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style);
console.log(style.height);
console.log(style.width);

console.log(document.documentElement.scrollTop);

// высота видимой страницы виндов
console.log(document.documentElement.clientHeight);
// сколько прокрутил
console.log(window.pageYOffset);

// высота страницы с учетом скролла полная высота
console.log(document.documentElement.scrollHeight);