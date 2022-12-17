const fLog = function (a, b, ...rest){
    console.log(a, b, rest);
}

fLog('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2){
    console.log(number * basis);
}

calcOrDouble(6)

