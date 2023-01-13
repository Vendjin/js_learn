const fLog = function (a, b, ...rest){
    console.log(a, b, rest);
}

fLog('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2){
    console.log(number * basis);
}

calcOrDouble(6)

let c = 4;
function addX(x) {
    return function(n) {
        return n + x
    }
}

const addThree = addX(3);

let d = addThree(c);
let res = addThree(c);

console.log(d)


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
    setTimeout(() => {
        reject('bar');
    }, 900);
});

promise.then(value => {
    console.log(value);
}).catch((e) => console.log(e))


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
            reject('erorr')

        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch((e) => console.log(e))



async function one() {
    const promises = [a(), b(), c()];
    const [outpu1, outpu2, outpu3] = await Promise.all(promises);
    return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
}

async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}

async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}

one().then(console.log);
two().then(console.log);
three().then(console.log);