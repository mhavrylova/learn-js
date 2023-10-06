export default function sumTwoArgs(arg1, arg2) {
    let argument1 = isNaN(+arg1) ? 0 : +arg1;
    let argument2 = isNaN(+arg2) ? 0 : +arg2;

    return argument1 + argument2;
}

