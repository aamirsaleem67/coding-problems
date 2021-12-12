const getEndOfArray = (intArray, k) => {
    let newArray = [];
    const givenArrayLength = intArray.length;

    for (let ii = givenArrayLength - 1; ii >= givenArrayLength - k; ii--) {
        newArray = [intArray[ii], ...newArray];
    }
    return newArray;
};

export default getEndOfArray;
