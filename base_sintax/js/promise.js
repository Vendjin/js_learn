'use strict';

console.log('Запрос данных...');

// один из способов выполнять код асинхронно, но в определенном прядке действий это setTimeout
/*setTimeout(() => {
    console.log('Подготовка данных...');

    const product = {
        name: 'TV',
        price: 2000
    };

    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);

}, 2000);*/

// что бы избежать множества таймаутов существуют promise

const req = new Promise(function (resolve, reject) {
    // resolve - обещание выполнилось
    // reject - обещание не выполнилось

    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };
        resolve(product);
        // может быть выполнено только одно, все последюущие выполнятсяь не будут
        reject(new Error('Какая - то ошибка'));

    }, 2000)
});

// обрабатываем успешные данные
req.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.status = 'order';

            resolve(data);

        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() =>{
    console.error('Произошла ошибка');
}).finally(() =>{
    // к примеру когда все действия с формой закончили очищаем ее
    console.log('Finally')
});


const test = time =>{
    return new Promise((resolve, reject) => {
       setTimeout(resolve, time);
    });
}

// test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'))
Promise.all([test(1000), test(2000)]).then(() =>{
    console.log('Ждем пока выполнятся все прописы и после что то делает');
});

Promise.race([test(1000), test(2000)]).then(() =>{
    console.log('Выполняется когда 1 из промиссев выполнится первым и после этого выполняется');
});

function delay(ms) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(), ms)
    });
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(response => response.json())
    .then(json => console.log(json));
