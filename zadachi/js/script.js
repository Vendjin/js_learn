function calculateVolumeAndArea(lenSide) {
    let cubeVolume = lenSide * lenSide * lenSide;
    let cubeSquare = 6 * (lenSide * lenSide);

    if (!Number.isInteger(lenSide) || typeof lenSide == "string" || lenSide < 0) {
        return 'При вычислении произошла ошибка';
    }
    return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeSquare}`;
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));

function getCoupeNumber(placeNumber) {
    // if (!Number.isInteger(placeNumber) || typeof placeNumber !== 'number' || placeNumber < 0){
    if (!Number.isInteger(placeNumber) || typeof placeNumber == 'string' || placeNumber < 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (placeNumber > 36 || placeNumber === 0) {
        return 'Таких мест в вагоне не существует';
    }

    let counter = 0;
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 4; j++) {
            counter += 1;

            if (placeNumber === counter) {
                return i;
            }
        }
    }
    // return Math.ceil(placeNumber / 4);
}

console.log(getCoupeNumber(9));

function getCoupeNumber2(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

console.log(getCoupeNumber2(9));


function getTimeFromMinutes(minutes) {
    const oneHour = 60;

    if (!Number.isInteger(minutes) || typeof (minutes) !== 'number' || minutes < 0) {
        return 'Ошибка, проверьте данные';
    } else if (minutes === 0){
        return 'Это 0 часов и 0 минут';
    }
    let hour = Math.floor(minutes / oneHour);
    let lastMinutes = minutes % oneHour;

    let hoursStr = ''
    switch (hour){
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hour} ${hoursStr} и ${lastMinutes} минут`
}

console.log(getTimeFromMinutes(65));
console.log(getTimeFromMinutes(125));


function findMaxNumber(a, b, c, d) {
    if (typeof a !== 'number' ||
        typeof b !== 'number' ||
        typeof c !== 'number' ||
        typeof d !== 'number' ){
        return 0;
    }
    return Math.max(a, b, c, d);
}

function fib(len) {

    if ( typeof len !== 'number' || len < 0 || len === 0){
        return '';
    }
    let strFib = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < len; i++){
        // if ( i + 1 === len) {
        //     strFib += `${first}`;
        // } else {
        //     strFib += `${first} `;
        // }
        strFib += `${first} `;
        let third = first + second;
        first = second;
        second = third;
    }

    return strFib.trim();
}

console.log(fib(3))