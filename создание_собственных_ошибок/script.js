'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'ыы',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
]

try {
    data.forEach((blockObj, index) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) throw new SyntaxError(`В данных под номером ${index+1} нет id`);
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    })
} catch (e) {
    if (e.name === "SyntaxError") {
        console.log(e.message);
        // если произошла какая-то другая ошибка, которую мы не отлавливаем, то выкидываем ее наружу
    } else throw e;


    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
}