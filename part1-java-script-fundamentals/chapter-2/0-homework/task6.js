import compareData from "./compareData.js";

console.log(compareData(null, undefined));
console.log(compareData(true, false));
console.log(compareData(true, 'true'));
console.log(compareData(true, 1));
console.log(compareData(4, 4));
console.log(compareData('4', 4));
console.log(compareData('4', '4'));
