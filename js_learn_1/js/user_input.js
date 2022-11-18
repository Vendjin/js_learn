'use strict'

// alert('Добро пожаловать')

const result = confirm('Ты тут?');
console.log(result);

const answer = prompt('Вам есть 18?', '');
console.log(answer);

const answers = [];
answers[0] = prompt('Как ваше имя?', "");
answers[1] = prompt('Как ваше фамилия?', "");
answers[2] = +prompt('Какой ваш возраст?', "");

console.log(answers);
