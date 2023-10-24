function checkAge(age) {
    return (age > 18) || confirm('Батьки дозволили?');
}

alert(checkAge(28));
