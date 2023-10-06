import { stringToNumber, convertToString } from './typeConversions.js';

console.log('stringToNumber:' + stringToNumber(87), ', convertToString:' + convertToString(87));
console.log('stringToNumber:' + stringToNumber('87'), ', convertToString:' + convertToString('87'));
console.log('stringToNumber:' + stringToNumber(null), ', convertToString:' + convertToString(null));
console.log('stringToNumber:' + stringToNumber(5 + 8), ', convertToString:' + convertToString(5 + 8));
console.log('stringToNumber:' + stringToNumber(5 + '8'), ', convertToString:' + convertToString(5 + '8'));
