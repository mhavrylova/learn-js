let arrCharacters = ["Harry", "Ron", "Hermione", "Dambldore", "Snape"];

// native map
let resultWithNativeSome = arrCharacters.some(function (item, index) {
    return item === "Hermione";
});
console.log('1 native: ', resultWithNativeSome);

// polyfill with prototype
Array.prototype.mySome = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)){
            return true;
        }
    }
    return false;
}

let resultWithPolyfillSomeProto = arrCharacters.mySome(function (item) {
    return item === "Hermione";
})

console.log('2 proto: ', resultWithPolyfillSomeProto);

// polyfill with function
let createSome = function (arr, callbackFn){
    for (let i = 0; i < arr.length; i++) {
        if(callbackFn(arr[i], i, arr)){
            return true;
        }
    }
    return false;
}

let resultWithPolyfillSomeFoo = createSome(arrCharacters, function (item) {
    return item === "Hermione";
})

console.log('3 func: ', resultWithPolyfillSomeFoo);
