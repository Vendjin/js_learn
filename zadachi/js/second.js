function amountOfPages(summary){
    let counter = 0;
    let res = '';

    for (let i = 1; i<=summary; i++){
        counter += 1;
        res += i;
        if (res.length === summary){
            return counter;
        }
    }
}
console.log(amountOfPages(185));


function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
        return string.indexOf(x) !== -1;
    });
}


function test(a){
    let counter = a.length;
    for (let i of a){
        console.log(i)
        if (Array.isArray(i)){
            console.log(`this array ${i}`)
            counter += test(i)
        }
    }
    return counter;
}
console.log(test([1, 2, [3, 4, [5]]]))


function deepCount(a){
    let count = a.length;
    for (let i=0; i<a.length; i++){
        if (Array.isArray(a[i])){
            count += deepCount(a[i]);
        }
    }
    return count;
}


console.log(deepCount([1, 2, [3, 4, [5]]]))