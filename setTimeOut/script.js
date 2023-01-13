// создать действие
const timerId = setTimeout(logger, 2000, 'hello');
// 2000 ms -> 2s

// отключить таймаут
clearInterval(timerId);

const btn = document.querySelector('.btn');
let timer;
let counter = 0;
/*btn.addEventListener('click',(e) =>{
    console.log(e.target)
    timer = setInterval(logger, 500, 'hello');
});*/

function logger (text){
    if (counter === 3){
        clearInterval(timer);
    }
    console.log(text);
    counter ++;
}


let id = setTimeout( function log(){
    console.log('HELLO');
    id = setTimeout(log, 500);
}, 500);


// function myAnimation(){
//     const elem = document.querySelector('.box');
//     let pos = 0;
//
//     const id = setInterval(frame, 10);
//
//     function  frame(){
//         if (pos === 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
//
// myAnimation();

let pos = 0;
function myAnimation(elem) {
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(() => myAnimation(elem));
    }
}

const box = document.querySelector('.box');

btn.addEventListener(
    'click', () => requestAnimationFrame(() => myAnimation(box))
);
