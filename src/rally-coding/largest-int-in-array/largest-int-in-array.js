const findLargestNumber = (intArray) => {
    let maxNumber = Math.max();
    for (let index = 0; index < intArray.length; index++) {
        if (intArray[index] > maxNumber) {
            maxNumber = intArray[index];
        }
    }
    return maxNumber;
};

export default findLargestNumber;
