export default function validate(string) {
    if (string.length <= 3) {
        return false;
    }
    if (typeof string !== 'string') {
        return false;
    }
    if (string.includes('a')) {
        return false;
    }
    return true;
}
