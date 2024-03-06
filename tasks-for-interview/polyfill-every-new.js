let arrM = [2];

Array.prototype.myEvery = function (callbackFn){
    if( typeof callbackFn !== 'function'){
        throw Error(`${typeof callbackFn} ${callbackFn} is not a function`);
    }

    for(let i = 0; i < this.length; i++){
        if (!callbackFn(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

let result = arrM.every(function(item, i, arr){
    return typeof item === 'number';
});

let resultMy = arrM.myEvery(function(item, i, arr){
    return typeof item === 'number';
});

console.log('native: ', result, 'my:', resultMy );
