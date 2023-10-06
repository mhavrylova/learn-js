export function isNumber(arg) {
    if (isNaN(arg) || typeof(arg) !== 'number') {return false;}
    return true;
}

export const isString = (arg) => typeof(arg) === 'string';

export function isEvenNumber(number) {
    return number % 2 === 0;
}
