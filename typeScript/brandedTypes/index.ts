// создается тип который перекрещивается с уникальным значением {__positive: 'PositiveNumber'};
type PositiveNumber = number & {__positive: 'PositiveNumber'};

// с помощью функции как бы объявляем TS как его использовать
// 1 вариант
function assertsPositiveNumber(value: number) : asserts value is PositiveNumber {
    if (value < 0) {
        throw new Error('value must be positive')
    }
}
// 2 вариант
function isPositiveNumber(value: number): value is PositiveNumber {
    return value > 0
}

function calcPrice(price: PositiveNumber) {
    return price * 2
}

function setPrice (price: number){
    // и используем assertsPositiveNumber(price) в функции setPrice,
    // что бы calcPrice(price) не вызывался с ошибкой типа
    assertsPositiveNumber(price)
    calcPrice(price)

    // использование 2 варианта, только делается через условие
    if (isPositiveNumber(price)){
        calcPrice(price)
    }
}


let newPrice = 1000
setPrice(newPrice)