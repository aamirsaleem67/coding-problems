const createMultiplicationTable = (n) => {
    let table = [];

    for (let index = 1; index <= n; index++) {
        let row = [];
        for (let j = 1; j <= n; j++) {
            row.push(index * j);
        }
        table.push(row);
    }

    return table;
};

export default createMultiplicationTable;
