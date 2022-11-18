function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i]
    }
    // Не трогаем
    return result;
}
console.log(firstTask())


function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    // Пишем решение вот тут
    for (let i in data ){
        if (typeof data[i] == 'string'){
            data[i] += ' - done';
        } else if (typeof data[i] == 'number'){
            data[i] *= 2;
        }
    }
    // Не трогаем
    return data;
}
console.log(secondTask())

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    // Пишем решение вот тут
    let counter = data.length-1
    for (let i = 0; i < data.length; i++){
        console.log(i)
        result[i] = data[counter]
        counter -= 1
    }

    // Не трогаем
    return result;
}

console.log(thirdTask())