const isEvenMultipleOfK = (intArray, k) => {
    let isEvenMultiple = true;
    for (let ii = 0; ii < intArray.length; ii++) {
        if (intArray[ii] % k !== 0) {
            isEvenMultiple = false;
            break;
        }
    }

    return isEvenMultiple;
};

export default isEvenMultipleOfK;
