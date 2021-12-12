const isPrefix = (strOne, strTwo) => {
    let prefix = '';
    for (let index = 0; index < strOne.length; index++) {
        if (prefix === strTwo) break;
        prefix += strOne[index];
    }
    return prefix === strTwo;
};

export default isPrefix;
