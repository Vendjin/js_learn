// nullish оператор ?? реагирует на null и undefined

'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    /*в интреполяцию с помощью || добавляем значение по умолчанию, если
    в функцию мы не передадим один из атрибутов
    но если в функцию придет 0, то он подставит значение по умолчанию
    а не сделает высоту равной 0,
    для обхода нужно использовать ??  а следующее значение будет по умолчанию
    если не предать один из аргументов в функцию*/
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w || 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

let userName;
let userKey;

console.log(userName ?? userKey ?? 'User');