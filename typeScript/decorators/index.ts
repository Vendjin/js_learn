function myDecorator(option: {name: string}) {
    return (target: Function) => {
        target.prototype.name = 'Alex';
    }
}

// @ts-ignore
@myDecorator
class User {
    name: string

    printName(){
        console.log(this.name)
    }
}

const user = new User();

console.log(user.name)
console.log(typeof User)