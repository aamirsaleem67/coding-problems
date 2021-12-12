import findRange from './integers-in-xy-range';

describe('Integers in Range of X,Y', () => {
    it('example # 1 - should return array of integers', () => {
        expect(findRange([1, 2, 3, 5, 6, 7], [2, 6])).toEqual(expect.arrayContaining([3, 5]));
    });

    it('example # 1 - should return array of integers', () => {
        expect(findRange([1, 2, 3, 4, 5, 10, 20], [4, 7])).toEqual(expect.arrayContaining([5]));
    });
});
