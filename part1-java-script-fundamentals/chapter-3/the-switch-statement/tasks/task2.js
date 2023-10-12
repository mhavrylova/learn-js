import { NOT_SUPPORTED_MSG } from './constants.js';

const checkNumber = () => {
    let a = +prompt('a?', '');
    switch (a) {
        case 0:
            return '0';
        case 1:
            return '1';
        case 2:
        case 3:
            return '2,3';
        default:
            return NOT_SUPPORTED_MSG; // будьякий свічкейс має містити default на випадок якщо прийде значеня яке ми не обробили у кейсах
    }

}

alert(checkNumber());
