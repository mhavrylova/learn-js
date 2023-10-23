function pow(x,n) {
    x = +prompt('enter first number', '3');
    n = +prompt('enter second number', '2');
    if (n > 0 && n % 1 === 0) {
        return x ** n;
    }
    return 'enter correct second number';
}

alert(pow());
