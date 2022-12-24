'use strict';

localStorage.setItem('number', '5');

console.log(localStorage.getItem('t3D'));
localStorage.removeItem('number');

const checkbox = document.querySelector('#check');
const form = document.querySelector('.form');
const change = document.querySelector('#color');


/*если в localStorage уже есть состояние, что галочка была утсановлена, то
перегружая страницу, галочка уже будет установлена*/
if (localStorage.getItem('isChecked')) {
    checkbox.checked = true
}
if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'brown';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'brown';
    }
});

const persone = {
    name: 'Alex',
    age: 25,
    admin: true
}

// отправляем в локальное хранилище объект, но что бы его было прочитать, его превратив в json
const serializedPersone = JSON.stringify(persone);
localStorage.setItem('persone', serializedPersone);


console.log(JSON.parse(localStorage.getItem('persone')));




