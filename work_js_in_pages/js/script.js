'use strict';

// получение элементов со страницы

// взять элемент по id
const box = document.getElementById('box');
console.log(box);


// возвращает псевдомассив элементов по тегу
const buttons = document.getElementsByTagName('button');
console.log(buttons);
// взять элемент можно только по индексу
console.log(buttons[1]);


// взять все элементы по имени класса
const circles = document.getElementsByClassName('circle');
console.log(circles);


// взять элементы по селектору в css
// у этого метода есть функционала forEach
const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
})


// возвращает только первый селектор на странице
const oneHeart = document.querySelector('.circle');
console.log(oneHeart);


// взаимодействие с полученными элементами
// console.dir(box);
box.style.backgroundColor = 'yellow';
box.style.width = '250px';

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 150';

// изменение всех элементов псевдо-массива
for(let i = 0; i <hearts.length; i++){
    hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(item => {
    item.style.backgroundColor ='black';
});

// создание элемента с помощью скрипта
const myDiv = document.createElement('div');

const text = document.createTextNode('Тут был я');


// модификация css атрибутов классов элементов
// нашему созданному JS элементу myDiv добавляем css свойства класса black
myDiv.classList.add('black');
// в DOM добавляем myDiv конец родительского элемента body
// body всегда есть по стандарту поэтому его не нужно где то "добывать"
document.body.append(myDiv);

const wrapper = document.querySelector('.wrapper');
const myDiv2 = document.createElement('div');
myDiv2.classList.add('black');
console.log(wrapper);
wrapper.append(myDiv2);
myDiv2.style.backgroundColor = 'green';

// вставить перед родителем
wrapper.prepend(myDiv2);


// вставить наш элемент перед/после конкретным элементом на странице
// hearts[0].before(myDiv);
// hearts[0].after(myDiv);

// удаление элемента
// circles[0].remove();

// заменить элементы, меняем сердечко на кружок
hearts[0].replaceWith(circles[0]);


// старые конструкции, но которые можно встретить
// wrapper.appendChild(myDiv);
// wrapper.insertBefore(myDiv, hearts[0]);
// wrapper.removeChild(hearts[0]);
// wrapper.replaceChild(circles[0], hearts[0]);


// вставить что-то в элемент, даже саму html структуру
myDiv.innerHTML = '<h1>HELLO</h1>';
circles[2].innerHTML = '1';
// добавить только текст
myDiv2.textContent = 'Hello';
// beforebegin - вставить перед элементом
// afterbegin - вставить в сам элемент
// beforeend - вставить в конец элемента
// afterend - вставить после элемента
myDiv.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
