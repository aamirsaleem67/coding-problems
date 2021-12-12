const isLastItem = (index, length) => {
    return index === length - 1;
};

const splitStrings = (strArg, k) => {
    let chunks = [];
    let chunkValue = '';

    for (let ii = 0; ii < strArg.length; ii++) {
        chunkValue += strArg[ii];
        let cond1 = (ii + 1) % k === 0;
        let cond2 = isLastItem(ii, strArg.length);

        if (cond1 || cond2) {
            chunks.push(chunkValue);
            chunkValue = '';
        }
    }

    return chunks;
};

export default splitStrings;
