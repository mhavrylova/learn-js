export default function isLeapYear(year) {
    const isNotNull = year !== null;
    const isNormalYear = year >= 0 && year.toString().length <= 4;
    const notStartWithZero = year.toString().length > 1 && year.toString()[0] !== '0';
    const isNumber = typeof year === 'number' && !isNaN(year);

    if (isNumber && isNotNull && isNormalYear && notStartWithZero) {
        return year % 4 === 0;
    }
    return 'invalid year format';
}
