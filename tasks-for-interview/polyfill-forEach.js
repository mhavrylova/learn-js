let arrMonths = ["January", "February", "March", "April", "May"];

// native map
console.log('1 native: ', `resultWithNativeForEach`);
let resultWithNativeForEach = arrMonths.forEach(function (item, index) {
    console.log(`${index}-${item}`);
});

// polyfill with prototype
Array.prototype.myForEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        callbackFn(this[i], i, this);
    }
}

console.log('2 proto: ', `resultWithPolyfillForEachProto`);
let resultWithPolyfillForEachProto = arrMonths.myForEach(function (item, index) {
    console.log(`${index}-${item}`);
})

// polyfill with function
let createForEach = function (arr, callbackFn) {
    for (let i = 0; i < arr.length; i++) {
        callbackFn(arr[i], i, arr);
    }
}

console.log('3 func: ', `resultWithPolyfillForEachFoo`);
let resultWithPolyfillForEachFoo = createForEach(arrMonths, function (item, index) {
    console.log(`${index}-${item}`);
});