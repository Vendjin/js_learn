function checkBrackets (str) {
    let counterOpen = 0;
    let counterClose = 0;

    for (const strElement of str) {
        if (strElement === '(' ){
            counterOpen += 1;
        }
        if (strElement === ')') {
            counterClose += 1;
        }
        // console.log(strElement)
        // console.log(counterOpen,counterClose )
    }
    if (counterOpen === counterClose){
        return true
    } else {
        return false
    }
}

console.log(checkBrackets('()(()())'));
console.log(checkBrackets('((((()))()())))'));


const arr = [1,1,2,3,4,5,6,7,7,8,9, 'a', 'a', 'c', 'b'];

function delDuplicate (arr){
    return [...new Set(arr)];
}

console.log(delDuplicate(arr));

function withOutRepeat(arr){
    let c = 0;
    let res = {};
    for (const arrElement of arr) {
        if (arrElement in res){
            res[arrElement] += 1;
        } else {
            res[arrElement] = 1;
        }
    }


    let myArr = [];
    // for (const resKey in res) {
    //     // console.log(res[resKey])
    //     if (res[resKey] < 2) {
    //         console.log(resKey, res[resKey]);
    //         myArr.push(resKey)
    //     }
    // }
    // console.log(res)
    // return myArr;
    const keys = Object.keys(res);
    keys.forEach(key => {
        console.log(key)
        if (res[key] === 1){
            myArr.push(key)
        }
    })

    return myArr
}

console.log(withOutRepeat(arr));

function User(name, age){
    this.name = name;
    this.age = age;
}

const user = new User('ivan', 25);
console.log(user)