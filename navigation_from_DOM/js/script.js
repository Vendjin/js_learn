// console.log(document.head);

// получаем весь html документ
// console.log(document.documentElement);

// получить дочерние элементы боди, то что указанно как text это перенос на строку
// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);


// получаем родителей, parentNode также перенос возвращает text
console.log(document.querySelector('#current'));
console.log(document.querySelector('#current').parentNode);
console.log(document.querySelector('#current').parentNode.parentNode);
// обходим пробему с переносами
console.log(document.querySelector('#current').parentElement);

// получить дата атрибуты
// nextSibling и previousSibling пожем получить переносы===text
console.log(document.querySelector('[data-current="3"]'));
console.log(document.querySelector('[data-current="3"]').nextSibling);
console.log(document.querySelector('[data-current="3"]').previousSibling);

// обходим проблему переносов
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);


for (let node of document.body.childNodes) {
    if (node.nodeName === '#text') {
        continue;
    }
    console.log(node)
}
