const isPalindrome = (strArg) => {
    let reverseString = '';

    for (let index = strArg.length - 1; index >= 0; index--) {
        reverseString += strArg[index];
    }

    return reverseString === strArg;
};

export default isPalindrome;
