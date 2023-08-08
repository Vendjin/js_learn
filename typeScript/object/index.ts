// type указывает не только типы полей, но и поля которые будут у объекта
type userType = {
    name: string,
    age: number
}

const user:userType = {
    name: 'Alex',
    age: 37
}


// от интерфейсов можно наследоваться
interface IUser {
    name: string,
    age: number,
    location: string
}

const secondUser:IUser = {
    name: 'Alex',
    age: 37,
    location: 'Kiev'
}

// расширить тип
type Pet = {
    name: string
    age: number
}

type Dog = Pet & {
    kind: 'Dog'
}

type Cat = Pet & {
    kind: 'Cat'
}

const myPet: Cat = {
    name: 'Tom',
    age: 3,
    kind: 'Cat'
}