const str = 'Test';

// получить все данные об объекте Number
console.dir(Number);

// получить длину строки
console.log(str.length);

console.log(str[2]);

// метод изменения регистра - возвращает новое значение
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

// срезы
const fruit = 'Some fruit';

// c какого индекса начинается слово
console.log(fruit.indexOf('fruit'))

// c какой части строки возвращать подстроку
console.log(fruit.slice(5));

// так же как и слайс, только не умеет в отрицательные индексы
console.log(fruit.substring(5, 9));

// с какого начинать и сколько символов после!
console.log(fruit.substr(5, 2));