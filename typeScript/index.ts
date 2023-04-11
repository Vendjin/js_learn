let stringType: string = '';
let numberType: number = 21;
let booleanType: boolean = true;

// если поменяю на другой тип, ошибки не будет
let unknownType: unknown = 'aaaa'
unknownType = 10;

let typeAny: any = 'World';
typeAny = 10;

// never какая-либо функция, переменная - ничего не возвращает
let typeNever: never
// тк функция ниже просто прерывается и ничего не возвращает, поэтому тип Newer сюда очень подходит
const error = (message: string): never => {
    throw new Error(message)
}

// возможный выбор нескольких типов
let userName: null | string | undefined = null;
