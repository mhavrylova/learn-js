let number;

for (;;) {
    number = prompt("Enter number > 100", '');
    if (number > 100 || !number) {
        break;
    }
}