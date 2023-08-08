function generatePassword(): string {
    const lowercaseLetters = 'abcdefghjkmnpqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const digits = '123456789';
    const specialChars = '!@#$%*_=';

    const allChars = lowercaseLetters + uppercaseLetters + digits + specialChars;

    let password = '';

    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
    password += digits.charAt(Math.floor(Math.random() * digits.length));
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));

    // Генерация оставшихся символов пароля
    const remainingChars = 13 - password.length;
    for (let i = 0; i < remainingChars; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return password;
}

const password = generatePassword();
console.log(password);