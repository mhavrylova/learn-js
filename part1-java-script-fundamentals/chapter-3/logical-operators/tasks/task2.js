import { MIN_AGE, MAX_AGE } from './constants.js';

const age = prompt('enter your age for variant without !', '');
const ageValidation =
    (age < MIN_AGE || age > MAX_AGE)
        ? `your age is not in diapason ${MIN_AGE}-${MAX_AGE}`
        : `your age is in diapason ${MIN_AGE}-${MAX_AGE}`;

alert(ageValidation);

const age2 = prompt('enter your age for variant with !', '');
const ageValidation2 =
    !(age2 >= MIN_AGE && age2 <= MAX_AGE)
        ? `your age is not in diapason ${MIN_AGE}-${MAX_AGE}`
        : `your age is in diapason ${MIN_AGE}-${MAX_AGE}`; // так краще не робити просто поміняти місцями кейси після '?'

alert(ageValidation2);
