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