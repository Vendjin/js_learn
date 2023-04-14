/*с помощью такого дженерика добиваемся того, что какой тип данных поступит на вход,
такой и получится на выходе, те он не может поменяться в теле функции*/
function userInfo<T>(args: T): T {
    console.log(args)
    return args
}

userInfo('Alex')


interface User<S, N> {
    name: S,
    age: N
}

const user: User<string, number> = {
    name: 'Alex',
    age: 37
}
