export default function generatePassword(charCount) {
    if (typeof charCount === 'number' && charCount > 1 && charCount <= 10) {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let password = '';
        for (let i = 0; i < charCount; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
    return 'You should enter a number that is more than 1 and less than 11.';
}

