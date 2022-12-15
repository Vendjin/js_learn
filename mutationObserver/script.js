'use strict';

const box = document.querySelector('.box');

// создаем штуку для слежки за изменениями
let observer = new MutationObserver((mutationsRecords) => {
    console.log(mutationsRecords);
});

// запускаем слежку и передаем за каким элементом следить
observer.observe(box, {
    childList: true,
});

// после того как пропала необходимость отслеживать, то дисконектим
observer.disconnect();