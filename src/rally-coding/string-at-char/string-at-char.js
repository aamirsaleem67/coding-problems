const getStringAtChar = (strArg, k) => {
    const splittedArray = strArg.split('\n');
    return splittedArray[k - 1];
};

export default getStringAtChar;
