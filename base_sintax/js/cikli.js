let num = 50;

while (num <= 55) {
    console.log(num++);
}

console.log('##################');
do {
    console.log(num);
    num++;
}
while (num < 55);

console.log('##################');
for (let i = 1; i < 8; i++) {
    if (i === 6) {
        break;
    }
    console.log(i, num);
    num++;
}

console.log('##################');
// вложенный цикл

for (let i = 0; i < 3; i++) {
    console.log('i', i);
    for (let j = 0; j < 4; j++) {
        console.log('j', j);
    }
}


console.log('##################');

let result = ''
const lenght = 7;

for (let i = 1; i < lenght; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result)

console.log('##################');


first: for (let i = 0; i < 3; i++) {
    console.log(`first level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`third level: ${k}`);
        }
    }
}


function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        console.log(i)
    }
}

function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}

function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}


function fourthTask() {
    // Пишем решение вот тут
    let counter = 2
    while (counter <= 16){
        if (counter % 2 !== 0 ){
            console.log(counter)
        }
        counter++
    }

}


function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 0; i <=5; i++){
        arrayOfNumbers[i] = i+5;
    }
    console.log(arrayOfNumbers)
    return arrayOfNumbers;
}

firstTask()
console.log('##################');
secondTask()
console.log('##################');
thirdTask()
console.log('##################');
fourthTask()
console.log('##################');
fifthTask()


