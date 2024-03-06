let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// native reduce
let resultWithNativeReduceWithInit = arrNumbers.reduce(function (previousValue, currentValue, index, array) {
    return previousValue + currentValue;
}, 5);

console.log('1.1 native with initial value: ', resultWithNativeReduceWithInit);

let resultWithNativeReduce = arrNumbers.reduce(function (previousValue, currentValue, index, array) {
    return previousValue + currentValue;
});

console.log('1.2 native w/o initial value: ', resultWithNativeReduce);

// polyfill with prototype
Array.prototype.myReduce = function (callbackFn, initValue) {
    let previousValue;
    if (initValue !== undefined) {
        previousValue = initValue;
        for (let i = 0; i < this.length; i++) {
            previousValue = callbackFn(previousValue, this[i], i, this);
        }
    } else {
        previousValue = this[0];
        for (let i = 1; i < this.length; i++) {
            previousValue = callbackFn(previousValue, this[i], i, this);
        }
    }
    return previousValue;
}

let resultWithPolyfillReduceProtoWithInit = arrNumbers.myReduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
}, 5)

console.log('2.1 proto with initial value: ', resultWithPolyfillReduceProtoWithInit);

let resultWithPolyfillReduceProto = arrNumbers.myReduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
})

console.log('2.2 proto w/o initial value: ', resultWithPolyfillReduceProto);
