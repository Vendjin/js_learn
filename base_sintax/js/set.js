const arr = [1, 1, 2, 3, 2, 4, 5, 6, 5];

const set = new Set(arr);
console.log(set);

// добавить в сет
set.add(7);
console.log(set)

set.delete(5);
console.log(set);

// очистить весь сет
// set.clear()

for (let value of set) {
    console.log(value);
}

const users = new Set(['Ivan', 'Oleg', 'Ann', 'Artem', 'Artem']);
users.forEach((value, valueAgain) => {
    console.log(value, valueAgain)
})

function unique(arr) {
    return Array.from(new Set(arr));
}