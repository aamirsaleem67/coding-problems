import removeAllZeroes from './remove-all-zeroes-array';

describe('Remove all zeroes from array', () => {
    it('should remove zeroes', () => {
        const elements = removeAllZeroes([0, 0, 2, 0, 3, 0, 5]);
        expect(elements.length).toEqual(3);
        expect(elements).toEqual(expect.arrayContaining([2, 3, 5]));
    });
});
