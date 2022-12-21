'use strict';
// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

console.log(typeof Object.keys(user)[0]);

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
]

const budget = [5000, 15000, 25000]

const map = new Map();

// set - в ручную добавляем в наш новый мап ключ и значение
map.set(shops[0], 500);
console.log(map)


shops.forEach((shop, iter) => {
    map.set(shop, budget[iter]);
})

console.log(map);

// .get - получить значение из мапа
console.log(map.get(shops[0]));

// .has - проверить имеется ли что то в элементе карты
console.log(map.has(shops[0]));

// удаляет из мапы что то по ключу
// map.delete(key);

// .clear - очищает мапу
// map.clear();

//  .size - возвращает количество элементов в мапе
console.log(map.size);

// по своей структуре map это массив с массивами [[]], создаем мап с уже имеющимися значениями и прибавляем после set
const secondMap = new Map([
    [{paper: 400}, 8000]
])

shops.forEach((shop, iter) => {
    secondMap.set(shop, budget[iter]);
})
console.log(secondMap);


const goods = [];
for (let shop of map.keys()){
    goods.push(Object.keys(shop)[0]);
}

console.log(map.keys());
console.log("keys", goods);

for (let price of map.values()){
    console.log("values", price);
}

for (let price of map.entries()){
    console.log("entries", price);
}

for (let [shop,price] of map.entries()){
    console.log(shop, price);
}

map.forEach((value, key, map) =>{
    console.log(value, key)
})


// превращаем обычный объект в мапу
const userObj = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

const userMap = new Map(Object.entries(userObj));
console.log(userMap);

// превращаем мапу в обычный объект
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

const o = Object.fromEntries(map);
console.log(o);



// Object.is() - являются ли два значения различными
// Object.keys() - массив из собственных перечисляемых свойств объекта
// Object.values() - массив значений всех ключей
// Object.entries() - массив перечисляемых [ключ/значение]