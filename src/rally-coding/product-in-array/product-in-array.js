const getProductOfArray = (intArray, k) => {
    let productOfIntegers = 1;

    for (let ii = 0; ii < intArray.length; ii++) {
        if (ii === k - 1) continue;
        productOfIntegers *= intArray[ii];
    }

    return productOfIntegers;
};

export default getProductOfArray;
