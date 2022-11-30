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
    } else if (minutes === 0) {
        return 'Это 0 часов и 0 минут';
    }
    let hour = Math.floor(minutes / oneHour);
    let lastMinutes = minutes % oneHour;

    let hoursStr = ''
    switch (hour) {
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
        typeof d !== 'number') {
        return 0;
    }
    return Math.max(a, b, c, d);
}

function fib(len) {

    if (typeof len !== 'number' || len < 0 || len === 0) {
        return '';
    }
    let strFib = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < len; i++) {
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

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (obj) {
        const {age} = obj;
        const {languages} = obj.skills;
        const languagesToStr = languages.join(' ').toUpperCase();

        return `Мне ${age} и я владею языками: ${languagesToStr}`
    }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    const {skills: {exp}} = plan;
    return exp;
}

console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;
    let result = '';
    for (let key in programmingLangs) {
        result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return result;
}

console.log(showProgrammingLangs(personalPlanPeter));


function showFamily(family) {
    let persons = family.join(" ");
    if (family.length) {
        return `Семья состоит из: ${persons}`;
    } else {
        return 'Семья пуста';
    }
}

const family = ['Peter', 'Ann', 'Alex', 'Linda'];
console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function (item) {
        console.log(item.toLowerCase());
    });
}

standardizeStrings(favoriteCities);

function reverseV1(someString) {
    if (typeof someString !== "string") {
        return 'Ошибка!';
    } else {
        console.log(someString.split(''));
        console.log(someString.split(' '));
        return someString.split('').reverse().join('');
    }
}

console.log(reverseV1('This is some strange string'));

function reverseUseLoop(someString) {
    if (typeof someString !== "string") {
        return 'Ошибка';
    } else {
        let result = '';
        let lenString = someString.length - 1
        // for (let i in someString) {
        //     let lastLetter = someString[lenString];
        //     result += lastLetter;
        //     lenString -= 1;
        //
        // }

        for (let i = someString.length - 1; i >= 0; i--) {
            result += someString[i];
        }
        return result;
    }
}

console.log(reverseUseLoop('This is some strange string'));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let resString = `Доступные валюты:\n`
    if (arr.length !== 0) {
        for (let i of arr) {
            if (i === missingCurr) {
                continue;
            }
            resString += `${i}\n`;
        }
        return resString;
    }
    return 'Нет доступных валют';
}

console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    const {height} = data;
    const {moneyPer1m3} = data;
    const {budget} = data;

    let allSpase = 0
    // for (let i in data.shops){
    //     let width = data.shops[i].width;
    //     let length = data.shops[i].length;
    //
    //     let sqare = width * length;
    //     allSpase += sqare;
    // }
    data.shops.forEach(shop => {
        allSpase += shop.width * shop.length;
    });

    let volume = allSpase * height;
    let price = volume * moneyPer1m3;

    if (price <= budget) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

console.log(isBudgetEnough(shoppingMallData));


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

console.log(sortStudentsByGroups(students));


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {

    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);
    copy.waitors = [{name: 'Mike', age: 32}];

    return copy;
}


console.log(transferWaitors(restorantData));



const a = {
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

console.log('old', a);

const copy = Object.assign({}, a);
copy.waitors.push({name: 'bob', age: 22});
copy.openNow = false;
console.log('new', copy);

