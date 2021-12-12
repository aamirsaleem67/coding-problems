import reverseArray from './reverse-array';

describe('Reversing an Array of Integers', () => {
    it('should return an array of integers', () => {
        expect(reverseArray([1, 2, 3, 4, 5])).toEqual(expect.arrayContaining([5, 4, 3, 2, 1]));
    });
});
