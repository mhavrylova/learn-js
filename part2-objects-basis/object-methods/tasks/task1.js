let calculator = {
    read() {
        this.a = +prompt('enter first number');
        this.b = +prompt('enter second number');
    },
    sum() {
        return (this.a + this.b);
    },
    mul() {
        return (this.a * this.b);
    }
}

calculator.read();
console.log( '1st number: ', calculator.a, '2nd number: ', calculator.b );
console.log( calculator.sum() );
console.log( calculator.mul() );
