let promise = new Promise(function(resolve, reject) {
    // функция-исполнитель (executor)
    // "певец"
    let obj = {
        name: 'bob',
        lastname: 'marley'
    }
    resolve(obj);
    reject(new Error("Whoops!"));
});
promise.then(
    result => console.log(result.name),
    error => console.log(error)
).catch( (e) => {
    console.error('Запустится когда произойдет ошибка', e);
}).finally(() => {
    console.log("Подчищаем данные или что то такое в общем и он ничего не должен возвращать")
});

// практический пример
// загрузка скрипта без промиса
function  loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
}

function  loadScriptWithPromise(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(null, script);
        script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

        document.head.append(script);
    });
}

let promiseLoad = loadScriptWithPromise("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
promiseLoad.then(
    script => console.log(`${script.src} загружен!`),
    error => console.log(`Ошибка: ${error.message}`)
).then(
    script => console.log(`Еще 1 обработчик...`)
);


/*Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд,
    так чтобы мы могли добавить к нему .then:*/

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));