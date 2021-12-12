const isOdd = (number) => number % 2 !== 0;

const alternateLowerUpperCase = (strArray) => {
    const newArray = [];

    for (let ii = 0; ii < strArray.length; ii++) {
        if (isOdd(ii + 1)) {
            newArray.push(strArray[ii].toLowerCase());
            continue;
        }
        newArray.push(strArray[ii].toUpperCase());
    }

    return newArray;
};

export default alternateLowerUpperCase;
