const findSequence = (intArray, sequence) => {
    let sequenceFound = false;
    for (let ii = 0; ii < intArray.length; ii++) {
        if (intArray[ii] === sequence[0]) {
            sequenceFound = true;
            for (let jj = 1; jj < sequence.length; jj++) {
                if (sequence[jj] !== intArray[ii + jj]) {
                    sequenceFound = false;
                    break;
                }
            }
        }
        if (sequenceFound) {
            break;
        }
    }
    return sequenceFound;
};

export default findSequence;
