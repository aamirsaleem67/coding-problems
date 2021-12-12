const find1sIn2dArray = (intArray) => {
    let count = 0;
    for (let ii = 0; ii < intArray.length; ii++) {
        const row = intArray[ii];
        for (let jj = 0; jj < row.length; jj++) {
            const columnValue = row[jj];
            if (columnValue === 1) count += 1;
        }
    }

    return count;
};

export default find1sIn2dArray;
