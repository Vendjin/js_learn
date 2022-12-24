'use strict';

// таким не пользуются
new RegExp('', '');

// синтаксис более короткий и частый
// /pattern/f

const ans = prompt('Введите ваше имя:');
// ищем букву n
let reg = /n/;
/*i - найти что то независимо от регистра
g - глобал найти несколько вхождение
n - многострочный режим*/

reg = /n/i;
// search найдет первое вхождение и вернет его индекс
console.log(ans.search(reg));

// match вернет список из 1го совпадения, в ком индексе и в каком выражении
console.log(ans.match(reg));

// match с функцией /пg вернет список из всех совпадений, а не 1 как выше
reg = /n/ig;
console.log(ans.match(reg));


const pass = prompt('Password');
console.log(pass);
// . в регулярке это все символы
console.log(pass.replace(/./g, '*'));
// экранировать символ \ обратный слеш
console.log(pass.replace(/\./g, '*'));
// если внутри строки хотим найти слеш то экранируем \\
console.log(pass.replace(/\\/g, '*'));
console.log(pass.replace(/\//g, '*'));

console.log('12-34-56'.replace(/-/g, ':'));

const regg = /n/ig;
// reg.test вернет true или false если регулярка нашла совпадение в искомой строке
console.log(regg.test(ans));

/*\d - digits все цифры
\w - word все слова
\s - spaces все пробелы*/

const answer = prompt('Вопрос')
reg = /\d/ig;
console.log(answer);
console.log(answer.match(reg));
