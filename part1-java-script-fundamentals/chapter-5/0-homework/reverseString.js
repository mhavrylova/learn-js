export default function reverseString(str) {
    if (typeof str === 'string') {
        let newStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
        return newStr;
    }
    throw Error('reverseString pass only type string');
}

// export const reverseString = (str) => str.split().reverse().join();
