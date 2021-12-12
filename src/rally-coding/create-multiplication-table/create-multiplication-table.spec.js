import createMultiplicationTable from './create-multiplication-table';

describe('Create a Multiplication Table', () => {
    it('should return a two dimensional array containing arrays of integers', () => {
        const table = [
            [1, 2, 3, 4],
            [2, 4, 6, 8],
            [3, 6, 9, 12],
            [4, 8, 12, 16]
        ];
        expect(createMultiplicationTable(4)).toEqual(expect.arrayContaining(table));
    });
});
