'use strict';

const now1  = Date.now();
console.log(Date(1670931000062));

const now2 = new Date();

console.log(now1, typeof now1);
console.log(now2, typeof now2);

// забивает нулями все кроме даты
const now3 = new Date('2022-12-13');
console.log(now3);

// месяцы считаются с 0 11 месяц это декабрь, а 12 станет январем и год будет 23, и время выводится по гринвичу
const now4 = new Date(2022, 11, 14, 13);
console.log(now4);


// методы даты
const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
// получить номер дня недели
console.log(now.getDay());

console.log(now.getHours());
console.log(now.getUTCHours());

// разница между utc и нашей временной зоной в минутах
console.log(now.getTimezoneOffset());


