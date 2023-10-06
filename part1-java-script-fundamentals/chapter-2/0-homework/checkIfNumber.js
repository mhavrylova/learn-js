import { NOT_A_NUMBER, IS_A_NUMBER } from './constants.js';
import { isNumber } from './helpers.js';

export default function checkIfNumber(arg) {
    if (isNumber(arg)) {
        return IS_A_NUMBER;
    }
    return NOT_A_NUMBER;
}

// other syntax
//
// export const checkIfNumber = (arg) => isNumber(arg) ? IS_A_NUMBER : NOT_A_NUMBER;
// arrow function without {} means auto return
//
// export const checkIfNumber = (arg) => {
//     return isNumber(arg) ? IS_A_NUMBER : NOT_A_NUMBER;
// }