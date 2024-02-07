const isEmpty = (obj) => {
    for (let key in obj) {
        if (key in obj) {
            return false; // 'in' - оператор, що перевіряє наявність властивості (key) в об'єкті (obj). Якщо вона є, то false
        }
    }
    return true;
}


let emptyObj = {};
let withKeysObj = {
    one: 1,
    two: 2,
    three: 3,
};

// ще можно взяти всі ключи або значення обʼєкту і перевірити довжину
// const arrOfKeys = Object.key(emptyObj)
// Boolean(arrOfKeys.length)
//
// Object.values(withKeysObj).length === 3 // true

console.log(emptyObj, isEmpty(emptyObj));
console.log(withKeysObj, isEmpty(withKeysObj));
