import reverseString from "./reverseString.js";
export default function isPalindrome(str) {
    if (reverseString(str)) {
        const baseString = formatString(str);
        const reversedString = formatString(reverseString(str));
        return baseString === reversedString;
    }
    return 'invalid format';
}

function formatString(str) {
    return str.toLowerCase().split(' ').join('');
}