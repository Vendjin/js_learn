const modalWindow = document.querySelector('.modal');
// const modalCloseBtn = document.querySelector('[data-close]');
const btnContactUs = document.querySelectorAll('[data-modal]');

function openModalWindow() {
    modalWindow.classList.remove('hide');
    modalWindow.classList.add('show');
    // modalWindow.classList.toggle('show')
    // функционал отключения прокрутки
    document.body.style.overflow = 'hidden';
    // если пользователь сам открыл окно, то оно не будет открываться снова
    clearInterval(modalTimerId);
}

function closeModalWindow() {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    // modalWindow.classList.toggle('show');
    document.body.style.overflow = '';
}

btnContactUs.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('btn')) {
            openModalWindow();
        }
    })
});

modalWindow.addEventListener('click', (event) => {
    const target = event.target;

    if (target.getAttribute('data-close') == '' || target === modalWindow) {
        closeModalWindow();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
        closeModalWindow();
    }
});

// делаем всплывающие окно когда страница пролистана до определенного уровня
// мой вариант, но не продуманно как не работать после закрытия окна
/*function getHeight() {
    let height = window.getComputedStyle(document.body).height;

    return height.split('.')[0];
}

console.log(document.documentElement.scrollTop, Math.trunc(getHeight() * 0.7));

document.addEventListener('scroll', () =>{
    if (document.documentElement.scrollTop  >= Math.trunc(getHeight() * 0.7)) {
        openModalWindow();
    }
});*/
const modalTimerId = setTimeout(openModalWindow, 50000);

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModalWindow();
        // удаляем событие прокрутки, после того как оно выполнилось
        window.removeEventListener('scroll', showModalByScroll);
    }
}