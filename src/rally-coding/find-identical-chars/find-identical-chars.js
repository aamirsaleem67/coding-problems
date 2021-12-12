const findIdenticalChars = (strArg) => {
    let isIdentical = false;
    for (let ii = 0; ii < strArg.length; ii++) {
        if (strArg[ii] === strArg[ii + 1]) {
            isIdentical = true;
        }
    }
    return isIdentical;
};

export default findIdenticalChars;
