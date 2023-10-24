const firstNumber = +prompt('enter first number', '3');
const secondNumber = +prompt('enter second number', '2');
function pow(x,n) {
    x = firstNumber;
    n = secondNumber;
    if (n > 0 && n % 1 === 0) {
        return x ** n;
    }
    return 'enter correct second number';
}

alert(pow());
