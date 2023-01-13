'use strict';

// таким не пользуются
// new RegExp('', '');
//
// // синтаксис более короткий и частый
// // /pattern/f
//
// const ans = prompt('Введите ваше имя:');
// // ищем букву n
let reg = /n/;
// /*i - найти что то независимо от регистра
// g - глобал найти несколько вхождение
// n - многострочный режим*/
//
// reg = /n/i;
// // search найдет первое вхождение и вернет его индекс
// console.log(ans.search(reg));
//
// // match вернет список из 1го совпадения, в ком индексе и в каком выражении
// console.log(ans.match(reg));
//
// // match с функцией /пg вернет список из всех совпадений, а не 1 как выше
// reg = /n/ig;
// console.log(ans.match(reg));
//
//
// const pass = prompt('Password');
// console.log(pass);
// // . в регулярке это все символы
// console.log(pass.replace(/./g, '*'));
// // экранировать символ \ обратный слеш
// console.log(pass.replace(/\./g, '*'));
// // если внутри строки хотим найти слеш то экранируем \\
// console.log(pass.replace(/\\/g, '*'));
// console.log(pass.replace(/\//g, '*'));
//
// console.log('12-34-56'.replace(/-/g, ':'));
//
// const regg = /n/ig;
// // reg.test() вернет true или false если регулярка нашла совпадение в искомой строке
// console.log(regg.test(ans));

// поиск класс символов, слова, пробелы, цифры
/*\d - digits все цифры
\w - word все слова
\s - spaces все пробелы*/

let answer = prompt('Вопрос с цифрами');
console.log(answer.match(/\d/g));


answer = prompt('Введите количество + px');
console.log(answer.match(/\d/g));

const string = 'my name is r2D2';
console.log(string.match(/\w\d\w\d/i));

/*обратные классы
\D - не числа
\W - не буквы
\S не пробелы*/

console.log(string.match(/\W/g));
console.log(string.match(/\D/g));

const msg = 'My number +12345678, name: Oleg';

function transformMsg(str) {

  let a = str.replace(/\d/g, '*');
  console.log(a.replace(/\w{4}:\s\w{1.}/, 'hidden'));
  // let b =

  // return b;
}
transformMsg(msg);