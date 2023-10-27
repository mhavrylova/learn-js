export default function reverseString(str) {
    if (typeof str === 'string' && str.length > 0) {
        let newStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
        return newStr;
    }
    return false;
}
