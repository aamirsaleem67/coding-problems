const getLastOccurenceIndex = (intArray, k) => {
    let kIndex = -1;
    for (let ii = 0; ii < intArray.length; ii++) {
        if (intArray[ii] === k) kIndex = ii;
    }
    return kIndex;
};

export default getLastOccurenceIndex;
