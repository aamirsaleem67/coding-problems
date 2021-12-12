const removeAllZeroes = (intArray) => {
    const newArray = [];

    for (let ii = 0; ii < intArray.length; ii++) {
        if (intArray[ii] === 0) continue;
        newArray.push(intArray[ii]);
    }

    return newArray;
};

export default removeAllZeroes;
