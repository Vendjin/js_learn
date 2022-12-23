'use strict';

const persone = {
    name: 'Alex',
    tel: '+7999999999',
    parents: {
      mom: 'Olga',
      dad: 'Mike'
    }
};

// конвертировать из object в JSON
const myJson = JSON.stringify(persone);
console.log(myJson);

// конвертировать из JSON в object
const obj = JSON.parse(myJson);
console.log(obj);

// глубокие копии
const clone = JSON.parse(JSON.stringify(persone));
console.log(clone);

const obj = [["name", "фывыфв" ], ["phone" , "1231413"]];
