import { NOT_A_STRING } from './constants.js';
import {isString } from './helpers.js';

export function stringToNumber(string) {
    if (isString(string)) {
        return Number(string);
    } else {
        return NOT_A_STRING;
    }
}

export function convertToString(arg) {
   return String(arg);
}

