import findLargestNumber from './largest-int-in-array';

describe('find largest integer', () => {
    it('example # 1 - should return 7', () => {
        const maxNumber = findLargestNumber([1, 5, 3, 7]);
        expect(maxNumber).toEqual(7);
    });

    it('example # 2 - should return 3', () => {
        const maxNumber = findLargestNumber([1, -5, 3, -7]);
        expect(maxNumber).toEqual(3);
    });
});
