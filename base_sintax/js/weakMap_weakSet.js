'use strict';

/*weakMap - ключами могу быть только объекты, если объект который был добавлен в эту мапу удалить, то и в мапе
он удалится*/


let user = {name: 'ivan'};

let map = new WeakMap();
map.set(user, 'something');

console.log(map.has(user));

user = null;

console.log(map.has(user));

let cache = new WeakMap();

function cacheUser(user){
    if (!cache.has(user)){
        cache.set(user, Date.now());
    }
    return cache.get(user);
}


let lena = {name: 'Lena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

console.log(cache);

lena = null;

console.log(cache);


// weakSet - так же как и обычный сет, только с зависимостью при удалении
// add, has, delete не является перебираемым типом

let messages = [
    {text: 'hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: 'Peace', from: 'M'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

console.log(readMessages.has(messages[0]));
