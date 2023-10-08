let age = prompt('enter your age for variant without !', '');
let ageValidation = (age < 14 || age > 90) ? 'your age is not in diapason 14-90' : 'your age is in diapason 14-90';

alert(ageValidation);

let age2 = prompt('enter your age for variant with !', '');
let ageValidation2 = !(age2 >= 14 && age2 <= 90) ? 'your age is not in diapason 14-90' : 'your age is in diapason 14-90';

alert(ageValidation2);
