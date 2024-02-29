let arrNumbers = [2, 3, 6, 2, 7, 9, 12, 19];

// native map
let resultWithNativeEvery = arrNumbers.every(function (item, index) {
    return item < 20;
});
console.log('1 native: ', resultWithNativeEvery);

// polyfill with prototype
Array.prototype.myEvery = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (!callbackFn(this[i], i, this)){
            return false;
        }
    }
    return true;
}

let resultWithPolyfillEveryProto = arrNumbers.myEvery(function (item) {
    return item < 20;
})

console.log('2 proto: ', resultWithPolyfillEveryProto);

// polyfill with function
let createEvery = function (arr, callbackFn){
    for (let i = 0; i < arr.length; i++) {
        if(!callbackFn(arr[i], i, arr)){
            return false;
        }
    }
    return true;
}

let resultWithPolyfillEveryFoo = createEvery(arrNumbers, function (item) {
    return item < 20;
})

console.log('3 func: ', resultWithPolyfillEveryFoo);
