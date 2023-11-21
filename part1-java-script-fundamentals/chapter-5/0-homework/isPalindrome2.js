export default function isPalindrome(str) {
    if (typeof str === 'string') {
        str = str.toLowerCase().split(' ').join('');
        for (let i = 0; i <= str.length - 1; i++) {
            if (str.at(i) !== str.at(-1 - i)) return false;
            if ( i >= Math.ceil(str.length / 2)) break;
        }
        return true;
    }
    return 'invalid format';
    // throw new Error('invalid format'); - best - to add error, but is stops code when error
}