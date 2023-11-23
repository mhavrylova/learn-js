export function sumIfNumber() {
    let sum = 0;
    for (let item of arguments) {
        if (typeof item !== 'number') continue;
        sum += item;
    }
    return sum;
}
export const sumIfNumberArrow = () => {
    let sum = 0;
    for (let item of arguments) {
        if (typeof item !== 'number') continue;
        sum += item;
    }
    return sum;
}
