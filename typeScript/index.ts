const generatePassword = () => {
    const chars = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789!@#$%&?='
    let password: string = ''
    let lowerLetter = false;
    let upperLetter = false;
    let hasNumber = false;
    let hasSpecialChar = false;

    while (password.length < 13 || !lowerLetter || !upperLetter || !hasNumber || !hasSpecialChar) {
        const charIndex = Math.floor(Math.random() * chars.length)
        const char = chars.charAt(charIndex);

        if (!lowerLetter && /[a-z]/.test(char)) lowerLetter = true;
        if (!upperLetter && /[A-Z]/.test(char)) upperLetter = true;
        if (!hasNumber && /[1-9]/.test(char)) hasNumber = true;
        if (!hasSpecialChar && /[!@#$%&?=]/.test(char)) hasSpecialChar = true;

        password += char
    }
    console.log(password)
}
generatePassword()
