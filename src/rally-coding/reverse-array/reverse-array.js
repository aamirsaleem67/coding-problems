const reverseArray = (intArray) => {
    let reverseArray = [];

    for (let ii = intArray.length - 1; ii >= 0; ii--) {
        reverseArray = [...reverseArray, intArray[ii]];
    }

    return reverseArray;
};

export default reverseArray;
