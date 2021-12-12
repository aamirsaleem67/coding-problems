const findPairOfIntegers = (arrayOne, arrayTwo, k) => {
    let sum = [];
    for (let ii = 0; ii < arrayOne.length; ii++) {
        for (let jj = 0; jj < arrayTwo.length; jj++) {
            if (arrayOne[ii] + arrayTwo[jj] === k) {
                sum = [arrayOne[ii], arrayTwo[jj]];
                break;
            }
        }

        if (sum.length) break;
    }
    return sum;
};

export default findPairOfIntegers;
