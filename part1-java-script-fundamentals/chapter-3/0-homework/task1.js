import calculator  from './calculator.js';

console.log( '5+8= : ' + calculator(5,8, '+' ));
console.log( '0+1= : ' + calculator(0,1, '+' ));
console.log( '15+18= : ' + calculator(15,18, '+' ));
console.log( '5-8= : ' + calculator(5,8, '-' ));
console.log( '0-1= : ' + calculator(0,1, '-' ));
console.log( '18-15= : ' + calculator(18,15, '-' ));
console.log( '0*8= : ' + calculator(0,8, '*' ));
console.log( '5*8= : ' + calculator(5,8, '*' ));
console.log( '100*44= : ' + calculator(100,44, '*' ));
console.log( '8/2= : ' + calculator(8,2, '/' ));
console.log( '2/8= : ' + calculator(2,8, '/' ));
console.log( '0/8= : ' + calculator(0,8, '/' ));
console.log( '8/0= : ' + calculator(8,0, '/' ));
