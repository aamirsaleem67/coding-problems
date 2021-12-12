import findPairOfIntegers from './pairs-of-integers';

describe('Pairs of Integers', () => {
    it('example # 1 - should return an array of two integers', () => {
        expect(findPairOfIntegers([1, 2, 3], [4, 5, 6], 8)).toEqual(expect.arrayContaining([2, 6]));
    });

    it('example # 2 - should return an array of two integers', () => {
        expect(findPairOfIntegers([1, 2, 3], [4, 5, 6], 9)).toEqual(expect.arrayContaining([3, 6]));
    });
});
