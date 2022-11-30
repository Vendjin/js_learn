const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function () {
        console.log('Test')
    }
};

console.log(options.colors['border']);
options.makeTest();

// delete options.name;
// console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof options[key] == 'object') {
        for (let nestedKey in options[key]) {
            console.log(`Свойство ${nestedKey} имеет значение ${options[key][nestedKey]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

// возвращает массив ключей
console.log(Object.keys(options));
console.log(Object.keys(options).length);

console.log(Object.values(options));

// Деструктуризация - вытаскивает вложенные объекты
const {border, background: bg} = options.colors;

console.log(border);
console.log(bg);


let desArr = {
    a: 'a',
    b: {
        aa: 1,
        ab: 2
    },
    c: [11, 12]
}

let {title = 'Test', a, b: {aa, ab}, c: [it1, it2]} = desArr;
console.log(title);
console.log(a);
console.log(aa);
console.log(ab);
console.log(it1);
console.log(it2);
