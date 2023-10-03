import { NOT_A_NUMBER, IS_A_NUMBER } from './constants.js';
import { isNumber } from './helpers.js';

export default function checkIfNumber(arg) {
    if (isNumber(arg)) {
        return IS_A_NUMBER;
    }
    return NOT_A_NUMBER;
}
