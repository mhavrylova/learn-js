let arrNumbers = [2, 3, 4, 12, 13, 14, 5, 6, 7, 12, 43, 12];

// native map
let resultWithNativeFilter = arrNumbers.filter(function (item) {
    return (item % 2 === 0);
});

console.log('1 native: ', resultWithNativeFilter);

// polyfill with prototype
Array.prototype.myFilter = function (callbackFn) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}

let resultWithPolyfillFilterProto = arrNumbers.myFilter(function (item) {
    return (item % 2 === 0);
})

console.log('2 proto: ', resultWithPolyfillFilterProto);


// polyfill with function
let createMyFilter = function (arr, callbackFn){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(callbackFn(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let resultWithPolyfillFilterFoo = createMyFilter(arrNumbers, function (item) {
    return (item % 2 === 0);
})

console.log('3 func: ', resultWithPolyfillFilterFoo);
