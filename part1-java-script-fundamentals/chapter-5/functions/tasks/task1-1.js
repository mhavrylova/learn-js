function checkAge(age) {
    return (age > 18) ? true : confirm('Батьки дозволили?');
}

alert(checkAge(8));
