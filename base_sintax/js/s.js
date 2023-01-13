const arr = [
  {
    name: 'Alex',
    salary: 500
  },
  {
    name: 'Ann',
    salary: 1500
  },
  {
    name: 'John',
    salary: 2500
  },
];

const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr)
console.log(result)

arr.forEach(value => {
  console.log(value)
})

console.log(arr.map(item => Object.entries(item)[1][1]));


function revert(str){
  let list = str.split("").reverse();
  console.log(list.join(""))
}

revert('hello');