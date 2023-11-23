export default function stringToWords(str) {
    if (typeof str === 'string' && str.length > 0) {
        const words = str.split(" ");
        return words;
    }
    return 'invalid format';
}
