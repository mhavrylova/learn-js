export function sumIfNumber(...args) {
    let sum = 0;
    for (let item of args) {
        if (typeof item !== 'number') continue;
        sum += item;
    }
    return sum;
}
export const sumIfNumberArrow = (...args) => {
    let sum = 0;
    for (let item of args) {
        if (typeof item !== 'number') continue;
        sum += item;
    }
    return sum;
}
