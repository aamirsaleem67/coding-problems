const getPersonEndPoint = (directions) => {
    const movement = {
        up: { index: 1, value: 1 },
        down: { index: 1, value: -1 },
        right: { index: 0, value: 1 },
        left: { index: 0, value: -1 }
    };
    const endPoint = [0, 0];

    for (let index = 0; index < directions.length; index++) {
        const direction = directions[index];
        const axisIndex = movement[direction].index;
        const axisValue = movement[direction].value;

        endPoint[axisIndex] = endPoint[axisIndex] + axisValue;
    }

    return endPoint;
};

export default getPersonEndPoint;
