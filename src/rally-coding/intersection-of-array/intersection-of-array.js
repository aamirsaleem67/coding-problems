const findIntersection = (arrOne, arrTwo) => {
    let intersection = [];
    for (let ii = 0; ii < arrOne.length; ii++) {
        for (let jj = 0; jj < arrTwo.length; jj++) {
            if (arrOne[ii] === arrTwo[jj]) {
                intersection.push(arrOne[ii]);
            }
        }
    }

    return intersection;
};

export default findIntersection;
