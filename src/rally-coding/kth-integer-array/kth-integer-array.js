const getItemAtKthIndex = (intArray, k) => {
    const lastItemIndex = intArray.length - 1;
    const index = lastItemIndex - k;
    return intArray[index];
};
export default getItemAtKthIndex;
