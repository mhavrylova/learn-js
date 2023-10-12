import { MIN_AGE, MAX_AGE } from './constants.js';

const age = prompt('enter your age', '');
const ageValidationMessage =
    (age >= MIN_AGE && age <= MAX_AGE)
        ? `your age is in diapason ${MIN_AGE}-${MAX_AGE}`
        : `your age is not in diapason ${MIN_AGE}-${MAX_AGE}`;

alert(ageValidationMessage);
