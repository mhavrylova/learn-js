import reverseString from "./reverseString.js";
export default function isPalindrome(str) {
    if (reverseString(str)) {
        let str1 = str.toLowerCase().split(' ').join('');
        let str2 = reverseString(str).toLowerCase().split(' ').join('');
        return str1 === str2;
    }
    return 'invalid format';
}
