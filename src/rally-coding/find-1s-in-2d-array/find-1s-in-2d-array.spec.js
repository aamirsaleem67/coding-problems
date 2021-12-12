import find1sIn2dArray from './find-1s-in-2d-array';

describe('find 1s in 2d array', () => {
    it('should return a integer', () => {
        const value = find1sIn2dArray([
            [1, 4, 2, 1],
            [6, 3, 8, 9],
            [1, 5, 1, 0]
        ]);

        expect(value).toEqual(4);
    });
});
