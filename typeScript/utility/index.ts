//////////Readonly//////////
interface User {
    name: string,
    age: number
}

const user: Readonly<User> = {
    name: 'Alex',
    age: 37
};

console.log(user.name);
// будет ошибка тк интерфейс только на чтение
user.name = 'MAx'


//////////Required//////////
// знак ? не обязательное поле
interface UserData {
    name?: string,
    age?: number
}

const obj: UserData = {age: 5};
const obj2: Required<UserData> = {name: 'Alex', age:27}


//////////RECORD//////////
interface PageInfo {
    title: string
}

type Route = 'home' | 'about' | 'contact';
const example: Record<Route, PageInfo> = {
    about: {title: 'about'},
    contact: {title: 'contact'},
    home: {title: 'home'}
};

//////////PICK//////////
// к примеру есть 2 вида пользователей админ и не админ,
// у не админа нет необходимости использовать поле description, перечисляем используемые поля

interface Todo {
    title: string,
    description: string,
    completed: boolean,
}

type TodoUser = Pick<Todo, 'title' | 'completed'>;

const todo: TodoUser = {
    title: 'Clean room',
    completed: false
};

//////////OMIT//////////
// с помощью Omit можем исключить какое-либо поле при создании интерфейса
interface TodoSchema {
    title: string,
    description: string,
    completed: boolean,
}

type UserTodo = Omit<TodoUser, 'description'>;
const userTodo: UserTodo = {
    title: 'Title',
    completed: true
};



