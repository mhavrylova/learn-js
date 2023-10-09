let checkNumber = function() {
    let a = +prompt('a?', '');
    switch (a) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
        case 3:
            return '2,3';
    }

}

alert(checkNumber());
