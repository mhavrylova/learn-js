export default function compareData(arg1, arg2) {
    const strictEquality = arg1 === arg2;
    const nonStrictEquality = arg1 == arg2;

    return `strictEquality: ${strictEquality}, nonStrictEquality: ${nonStrictEquality}`;
}
