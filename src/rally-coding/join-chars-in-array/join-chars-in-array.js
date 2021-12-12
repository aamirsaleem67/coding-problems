const joinCharsInArray = (strArray, k) => {
    let combinedString = '';
    for (let ii = 0; ii < strArray.length; ii++) {
        combinedString += strArray[ii];
        if (ii === strArray.length - 1) continue;
        combinedString += k;
    }
    return combinedString;
};

export default joinCharsInArray;
