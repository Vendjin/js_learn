enum Statuses {
    Pending,
    Success,
    Failed
}


console.log(Statuses.Success)
console.log(Statuses[0])

enum StatusesCode {
    Created = 200,
    NotFound = 404,
    BadRequest = 400,
    CreatedAccount = 'Account created successful',

}

console.log(StatusesCode.BadRequest)

