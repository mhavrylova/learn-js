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

console.log(emptyObj, isEmpty(emptyObj));
console.log(withKeysObj, isEmpty(withKeysObj));
