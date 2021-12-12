const removeParenthesis = (strArg) => {
    let newString = '';
    for (let ii = 0; ii < strArg.length; ii++) {
        if (strArg[ii] === ')' || strArg[ii] === '(') continue;
        newString += strArg[ii];
    }
    return newString;
};

export default removeParenthesis;
