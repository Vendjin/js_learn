let increment = 10;
let decriment = 10;

// постфиксные
// increment++;
// decriment--;

// префиксные
// ++increment;
// --increment;

// если использовать постфиксные инкремент и декримент прямо в лог
// то сначала вернет старое значение, а потом присвоет
console.log(increment++);
console.log(decriment--);
console.log(increment)
console.log(decriment)
// а если префиксные, то выполнит вычесление и вернте новый результат
console.log(++increment);
console.log(--decriment);

console.log(9%4);

let isChecked = true,
    isClose = true,
    isOpen = false;

console.log(isChecked && isClose);
console.log(isOpen && isClose);
console.log(isChecked || isOpen || isClose);
