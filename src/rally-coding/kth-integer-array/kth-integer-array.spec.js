import getItemAtKthIndex from './kth-integer-array';

describe('Kth Integer From End of Array', () => {
    it('should return single integer', () => {
        const element = getItemAtKthIndex([1, 2, 3, 4, 5, 6], 0);
        expect(element).toEqual(6);
    });

    it('should work with negative numbers', () => {
        const element = getItemAtKthIndex([-1, 2, 3, -4, 5, 0], 3);
        expect(element).toEqual(3);
    });
});
