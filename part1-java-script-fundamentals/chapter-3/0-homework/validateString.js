import { IS_VALID, IS_INVALID } from './constants.js';
import { hasA, isString, isLessThanThree } from './helpers.js';

export default function validateString(stringToCheck) {

    switch (true) {
        case isLessThanThree(stringToCheck):
        case hasA(stringToCheck):
        case isString(stringToCheck):
            return IS_INVALID;
        default:
            return IS_VALID;
    } // перевіряє чи в усіх функціях, які в 'case' - відповідь 'true'. Якщо так, то повертає 'IS_INVALID', якщо хоч в одній 'false' - то 'IS_VALID'
}
