'use strict';

const boxQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

// удаляем 1 элемент остается 2
// boxQuery[0].remove();
// // удаляем 1 елемент aиз оставшихся 2х
// boxesGet[0].remove();

/*видим что query показывает как бы первичный слепок, что был в начале
но не выдает изменившееся состояние - не живой псевдо-массив*/
console.log(boxQuery);

/*а get показывает изменившееся состояние, но у него нет возможности
foreach и тд*/
console.log(boxesGet);


for (let i  = 0; i <5; i++){
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
}

console.log(boxQuery);
console.log(boxesGet);

/*превращаем наш живой массив с отсутствующими методами в обычный массив
дабы получить методы, но он становится не живым массивом*/

console.log(Array.from(boxesGet));

// найти элемент который в себе имеет определенный css селектор
boxQuery.forEach(box =>{
    if(box.matches('.this')) console.log(`Thin one! ${box}`);
});

// получаем wrapper из box
console.log(boxQuery[0].closest('.wrapper'));