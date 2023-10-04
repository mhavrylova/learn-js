import compareNumberAndString from "./compareNumberAndString.js";

console.log(compareNumberAndString(null, undefined));
console.log(compareNumberAndString(true, false));
console.log(compareNumberAndString(true, 'true'));
console.log(compareNumberAndString(true, 1));
console.log(compareNumberAndString(4, 4));
console.log(compareNumberAndString('4', 4));
console.log(compareNumberAndString('4', '4'));
