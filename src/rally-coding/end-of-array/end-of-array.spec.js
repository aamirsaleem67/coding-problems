import getEndOfArray from './end-of-array';

describe('Integers from the end of array', () => {
    it('example # 1 - return an array of integers', () => {
        const endOfArray = getEndOfArray([1, 2, 3, 4], 2);
        expect(endOfArray).toEqual(expect.arrayContaining([3, 4]));
    });

    it('example # 2 - return an array of integers', () => {
        const endOfArray = getEndOfArray([10, 20, 30, 40, 50, 60], 4);
        expect(endOfArray).toEqual(expect.arrayContaining([30, 40, 50, 60]));
    });

    it('example # 3 - return an array of integers', () => {
        const endOfArray = getEndOfArray([1, -2, 3, -4], 1);
        expect(endOfArray).toEqual(expect.arrayContaining([-4]));
    });
});
