function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i]
    }
    return result;
}
console.log(firstTask())


function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i in data ){
        if (typeof data[i] == 'string'){
            data[i] += ' - done';
        } else if (typeof data[i] == 'number'){
            data[i] *= 2;
        }
    }
    return data;
}
console.log(secondTask())

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    let counter = data.length-1
    for (let i = 0; i < data.length; i++){
        console.log(i)
        result[i] = data[counter]
        counter -= 1
    }

    return result;
}

console.log(thirdTask())