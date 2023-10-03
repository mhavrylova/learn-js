import {EVEN_NUMBER, NOT_A_NUMBER, ODD_NUMBER} from './constants.js';
import { isNumber, isEvenNumber } from './helpers.js';

export default function checkIfEven(arg) {
    if (isNumber(arg)) {
        if (isEvenNumber(arg)) {
            return EVEN_NUMBER;
        }
        return ODD_NUMBER;
    } else {
        return NOT_A_NUMBER;
    }
}
