const getEndPoint = (intArray) => {
    let endPoint = [0, 0];
    for (let ii = 0; ii < intArray.length; ii++) {
        const row = intArray[ii];
        const xAxis = endPoint[0] + row[0];
        const yAxis = endPoint[1] + row[1];
        endPoint = [xAxis, yAxis];
    }
    return endPoint;
};

export default getEndPoint;
