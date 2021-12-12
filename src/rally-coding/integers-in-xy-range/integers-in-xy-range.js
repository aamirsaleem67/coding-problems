const findRange = (intArray, range) => {
    const start = range[0];
    const end = range[1];
    let elements = [];
    for (let ii = 0; ii < intArray.length; ii++) {
        const value = intArray[ii];
        if (value > start && value < end) {
            elements = [...elements, value];
        }
    }

    return elements;
};

export default findRange;
