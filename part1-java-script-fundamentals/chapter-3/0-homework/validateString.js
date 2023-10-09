import { IS_VALID, IS_INVALID } from './constants.js';
import { checkIfLongLength, checkIfHasNotA, checkIfIsDifferType } from './helpers.js';

export default function validateString(stringToCheck) {
    let result = checkIfLongLength(stringToCheck) && checkIfHasNotA(stringToCheck) && checkIfIsDifferType(stringToCheck);

    switch (result) {
        case true:
            return IS_VALID;
        default:
            return IS_INVALID;
    }
}
