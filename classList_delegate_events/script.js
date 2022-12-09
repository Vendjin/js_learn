const buttons = document.querySelectorAll('button');

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
if (buttons[1].classList.contains('blue')){
    console.log('bluer')
}

buttons[0].addEventListener('click', (evt) =>{
    if (!buttons[1].classList.contains('red')){
         buttons[1].classList.add('red');
    } else {
        buttons[1].classList.remove('red');
    }
    // или сделать через тогл
    // buttons[1].classList.toggle('red');
});

