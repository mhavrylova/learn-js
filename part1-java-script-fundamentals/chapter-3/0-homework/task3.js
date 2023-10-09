import { InvalidCaseWithA, ValidCase, InvalidCaseWithSmallLength, InvalidCaseWithDifferentType } from './constants.js';
import validateString from './validateString.js';

console.log(validateString(InvalidCaseWithA));
console.log(validateString(ValidCase));
console.log(validateString(InvalidCaseWithSmallLength));
console.log(validateString(InvalidCaseWithDifferentType));
