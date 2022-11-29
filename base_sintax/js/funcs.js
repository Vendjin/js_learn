'use strict';

let num = 20;

// декларативные функция - создается до начала выполнения скрипта, можно вызвать
// перед объявлением
function showFirstMessage(text) {
    console.log(`Hello ${text}`);
    let num = 10;
    console.log(`inside function ${num}`);
}

showFirstMessage('world');
console.log(`global num ${num}`);

function calcSum(a, b) {
    return (a + b);
}

console.log(calcSum(4, 3));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


// function expression - создается когда код доходит до нее, можно вызвать только после объявления
const logger = function (){
    console.log('Hi');
};

logger();

// стрелочная функция - не имеет контекста вызова
const calc = (a, b) => {
    return a + b
};
const calcShort = (a, b) => a + b;

console.log('=> funcs',calcShort(5, 4));

const usdCurse = 65;
const eurCurse = 60;
function convert(curse, amount) {
    console.log(curse * amount);
}

convert(usdCurse, 500);
convert(eurCurse, 500);


const discount = 0.9;
function promotion(result){
     return result * discount;
}

console.log(promotion(100));


function test(){
    for (let i = 0; i < 5; i++){
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();

function getMathResult(number, steps){
    let result = ``
    if (typeof steps === "string" || steps <= 0){
        return number;
    }else {

        for (let i = 1; i <= steps; i++){
            result += `${number * i}---`;
        }
    }

    return result.slice(0, -3);
}

console.log(getMathResult(5, 3));
console.log(getMathResult(10, '5'));
console.log(getMathResult(10, 0));
console.log(getMathResult(20, -5));