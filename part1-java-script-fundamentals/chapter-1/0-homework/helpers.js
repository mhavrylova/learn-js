export function checkIfLongLength(string) {
    return string.length > 3;
}

export function checkIfHasNotA(string) {
    return !String(string).includes('a');
}

export function checkIfIsDifferType(string) {
    return typeof string === 'string';
}
