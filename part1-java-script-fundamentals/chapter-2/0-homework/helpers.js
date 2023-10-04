export function isNumber(arg) {
    if (typeof(arg) == 'number') {
        return true;
    } else {
        return false;
    }
}

export function isString(arg) {
    if (typeof(arg) == 'string') {
        return true;
    } else {
        return false;
    }
}

export function isEvenNumber(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
