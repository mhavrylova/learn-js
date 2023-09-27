import { isValid, isInValid } from './constants.js';
import validate from './helpers.js';

export default function validateString(stringToCheck) {
    if (validate(stringToCheck)) {
        return isValid;
    }
    return isInValid;
}
