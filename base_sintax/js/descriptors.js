'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

// writable - если тру, то свойство в объекте можно изменить
// enumerable - то свойство будет перечислятся в циклах
// configurable - свойство можно будет удалить, а атрибуты его можно изменить

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// меняем свойство параметров
Object.defineProperty(user, 'name', {writable: false});

// создаем новое свойство, после создания все флаги будут false
Object.defineProperty(user, 'gender', {value: 'male', writable: true, enumerable: true});
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// ситуация пользователь не должен иметь возможность менять свою дату рождения
Object.defineProperty(user, 'birthday', {writable: false});


// делаем так что бы в переборе не отображался наш метод(функция)
Object.defineProperty(user, 'showMyPublicData', {enumerable: false})
for (let key in user) console.log(key);


Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
})

// Object.is() - являются ли два значения различными
// Object.keys() - массив из собственных перечисляемых свойств объекта
// Object.values() - массив значений всех ключей
// Object.entries() - массив перечисляемых [ключ/значение]

