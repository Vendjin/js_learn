function generateLogins(count) {
    const logins = [];
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < count; i++) {
        let login = '';
        for (let j = 0; j < 6; j++) {
            login += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        logins.push(login);
    }

    return logins;
}

const loginList = generateLogins(500);
console.log(loginList);