export function sumIfNumber() {
    let sum = 0;
    for (let item of arguments) {
        if (typeof item !== 'number') continue;
        sum += item;
    }
    return sum;
}

// the arguments object is not accessible in arrow functions. use the rest parameter syntax (...args) to collect all arguments

export const sumIfNumberArrow = (...args) => {
    let sum = 0;
    for (let item of args) {
        if (typeof item !== 'number') continue;
        sum += item;
    }
    return sum;
}
