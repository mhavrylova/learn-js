export default function calculator(firstNumber, secondNumber, operator) {

    switch (operator) {
        case '+':
            return +firstNumber + +secondNumber;
        case '-':
            return +firstNumber - +secondNumber;
        case '*':
            return +firstNumber * +secondNumber;
        case '/':
            return (+secondNumber === 0) ? 'You can not divide to 0' : (+firstNumber / +secondNumber);
        default:
            return 'Unknown operator';
    }
}
