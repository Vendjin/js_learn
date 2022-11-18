'use strict'

// alert('Добро пожаловать')

// окно с вопросом и вариантами да/нет возращает true/false
const result = confirm('Ты тут?');
console.log(result);

// окно с полем для ввода ответа на вопрос => строку
const answer = prompt('Вам есть 18?', '');
console.log(typeof (answer));
console.log(answer);


const answers = [];
answers[0] = prompt('Как ваше имя?', "");
answers[1] = prompt('Как ваше фамилия?', "");
answers[2] = +prompt('Какой ваш возраст?', "");

console.log(answers);
