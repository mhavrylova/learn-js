import checkIfNumber from './checkIfNumber.js';

console.log(checkIfNumber(87));
console.log(checkIfNumber('87'));
console.log(checkIfNumber(null));
console.log(checkIfNumber(5 + 8));
console.log(checkIfNumber(5 + '8'));
console.log(checkIfNumber(NaN));
console.log(checkIfNumber('8' / 2));
