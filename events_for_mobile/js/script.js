// touchstart - касание
// touchmove - движение по экрану
// touchend - убран палец с экрана
// touchenter - ведем палец и наскальзываем на элемент на который повешано событие
// touchleve - палец проскользил элемент за него
// touchcancel палец ушел с области браузера

'use strict';

// что бы точно знали что все наши дом узлы уже готовы
window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();
        console.log('start');
        console.log(event.touches)
    })

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();
        console.log('move')
    })

    box.addEventListener('touchend', (event) => {
        event.preventDefault();
        console.log('end')
    })

});

// touches - информация о всех пальцах что сейчас держат
// targetTouches
// changedTouches 