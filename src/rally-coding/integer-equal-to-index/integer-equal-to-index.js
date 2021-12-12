const isIntegerEqualToIndex = (intArray) => {
    let value;
    for (let ii = 0; ii < intArray.length; ii++) {
        if (ii === intArray[ii]) {
            value = intArray[ii];
            break;
        }
    }
    return value;
};

export default isIntegerEqualToIndex;
