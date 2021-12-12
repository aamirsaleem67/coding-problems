const sumArray = (intArray) => {
    if (!intArray || !intArray.length) return 0;
    return intArray[0] + sumArray(intArray.slice(1));
};

export default sumArray;
