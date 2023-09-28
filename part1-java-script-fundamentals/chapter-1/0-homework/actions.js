import { IS_VALID, IS_INVALID } from './constants.js';
import { checkIfLongLength, checkIfHasNotA, checkIfIsDifferType } from './helpers.js';

export default function validateString(stringToCheck) {
    if ( checkIfLongLength(stringToCheck) && checkIfHasNotA(stringToCheck) && checkIfIsDifferType(stringToCheck) ) {
        return IS_VALID;
    }
    return IS_INVALID;
}
