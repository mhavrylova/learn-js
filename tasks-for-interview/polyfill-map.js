let arrMonths = ["January", "February", "March", "April", "May"];

// native map
let resultWithNativeMap = arrMonths.map(function(item, index) {
   return `${index+1}-${item}`;
});
console.log('1 native: ', resultWithNativeMap);

// polyfill with prototype
Array.prototype.myMap = function(callbackFn) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        /* call the callback function for every value of this array and push the returned value into our resulting array */
        arr.push(callbackFn(this[i], i, this));
    }
    return arr;
}

let resultWithPolyfillMapProto = arrMonths.myMap(function(item, index) {
    return `${index+1}-${item}`;
});

console.log('2 proto: ', resultWithPolyfillMapProto);

// polyfill with function
let createMap = function (initArray, callbackFn) {
    let arr = [];
    for (let i = 0; i < initArray.length; i++) {
        arr.push(callbackFn(initArray[i], i, initArray));
    }
    return arr;
}

let resultWithPolyfillMapFoo = createMap(arrMonths, function(item, index) {
    return `${index+1}-${item}`;
});

console.log('3 func: ', resultWithPolyfillMapFoo);