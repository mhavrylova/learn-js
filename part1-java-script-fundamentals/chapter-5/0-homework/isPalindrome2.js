export default function isPalindrome(str) {
    if (typeof str === 'string') {
        for (let i = 0; i <= str.length - 1; i++) {
            if (str[i] === str[str.length - 1 - i]) {
                continue;
            }
            return false;
        }
        return true;
    }
    return 'invalid format';
}