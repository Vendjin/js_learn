const btn = document.querySelector("button");
const ovrlay = document.querySelector('.overlay')
// можно назначить событие по кнопке, но если мы напишем на это же событие еще 1 действие
// то выполниться только 2 действие, первое не выполнится, поэтому данный метод
// менее предпочтительный
// btn.onclick = function (){
//     alert('Click')
// }


// лучше использовать addEventListener в который мы передаем действие, а после функцию
// что делать, данный подход выполнит и первой и последующие действия,
// // выполняются последовательно в порядке очереди
// btn.addEventListener('click', () => {
//     alert('click');
// });
//
// btn.addEventListener('click', () => {
//     alert('second click');
// });


// событие наведен курсов на кнопку
// btn.addEventListener('mouseenter', (event) => {
//     console.log(event);
//     // получить элемент к которому привязано событие
//     console.log(event.target);
//     // получил элемент и удалил его сразу
//     // event.target.remove()
//
// });

let i = 0;
const deleteElem = (event) => {
    // event.target.remove();
    // посмотреть порядок всплытия событий
    console.log(event.currentTarget);

    console.log(event.target);

    // i++;
    // if (i === 1) {
    //     btn.removeEventListener('click', deleteElem);
    // }
};

btn.addEventListener('click', deleteElem);
ovrlay.addEventListener('click', deleteElem);

// убираем стандартные действия браузера, к примеру ссылка не будет преходить
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    // убираем стандартное поведение
    event.preventDefault();
    // назначаем свое
    console.log(event.target);
});

// повесить события на все кнопки
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log(event.target)
    }, {once: true});
});

// опции события - передается 3 элементом
// target.addEventListener(type, listener[, option])
// once - событие должно происходить 1 раз, отличная альтернатива removeEventListener
