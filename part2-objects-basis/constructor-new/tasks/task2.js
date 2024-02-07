function Accumulator(startingValue) {
    this.value = startingValue
    this.read = function() {
        this.value += +prompt('enter number');
    }
}

let accumulator = new Accumulator(1);

accumulator.read(); // додає введене користувачем значення
accumulator.read(); // додає введене користувачем значення
console.log(accumulator.value); // показує суму цих значень
