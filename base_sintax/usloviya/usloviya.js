if (0){
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Mnogo');
} else{
    console.log('ok!');
}

// условия с помощью тернарного оператора
(num === 50 ) ? console.log('OK!') : console.log('Error');

// конструкция switch case
switch (num){
    case 49:
        console.log('Neverno');
        break;
    case 100:
        console.log('neverno');
        break;
    case 50:
        console.log('True');
        break;
    default:
        console.log('Default message');
        break
}


const hamburger = true;
const fries = true;

if(hamburger && fries){
    console.log('I full');
}


console.log((hamburger && fries));