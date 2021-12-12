const findValueInStrings = (strArray, strArg) => {
    for (let ii = 0; ii < strArray.length; ii++) {
        if (strArray[ii] === strArg) return true;
    }
    return false;
};

export default findValueInStrings;
