const buttons = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// console.log(buttons[0].classList);
console.log(buttons[0].classList.item(0));
console.log(buttons[0].classList.item(1));

// добавить класс элементу в конец
buttons[0].classList.add('red');

// удалить класс у элемента
buttons[0].classList.remove('blue');

// переключатель, если класса нет то добавит, а если есть то удалит
buttons[0].classList.toggle('blue');
buttons[1].classList.toggle('blue');

// проверка на есть ли класс у элемента
if (buttons[1].classList.contains('blue')) {
    console.log('bluer')
}

buttons[0].addEventListener('click', (evt) => {
    if (!buttons[1].classList.contains('red')) {
        buttons[1].classList.add('red');
    } else {
        buttons[1].classList.remove('red');
    }
    // или сделать через тогглер
    // buttons[1].classList.toggle('red');
});

// что бы не навешивать эвент через цикл, можно навесть на родителя элементов - это Делегирование
// без делегирования через фориач все последующие добавленыне элементы не получат теже свойства, что и предыдущие
wrapper.addEventListener('click', (evt) => {
    // console.dir(evt.target)
    // target и target.name не у всех есть таргет нейм, поэтому на всякий случай такое двойное условие
    if (evt.target && evt.target.tagName === 'BUTTON') {
        console.log('BUTTON');
    }
    if (evt.target && evt.target.classList.contains('blue')) {
        console.log('BLUE');
    }
    if (evt.target && evt.target.matches('button.red')) {
        console.log('matches');
    }
});


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);