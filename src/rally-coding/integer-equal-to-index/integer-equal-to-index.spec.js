import isIntegerEqualToIndex from './integer-equal-to-index';

describe('Is integer equal to index', () => {
    it('example # 1 - should return a single integer', () => {
        const value = isIntegerEqualToIndex([10, 20, 11, 12, 4]);
        expect(value).toEqual(4);
    });

    it('example # 2 - should return a single integer', () => {
        const value = isIntegerEqualToIndex([2, 1, 11, 12, 4]);
        expect(value).toEqual(1);
    });
});
