export function isLessThanThree(string) {
    return string.length <= 3;
}

export function hasA(string) {
    return String(string).includes('a');
}

export function isString(string) {
    return typeof string === 'string';
}
