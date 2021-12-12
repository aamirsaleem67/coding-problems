import getProductOfArray from './product-in-array';

describe('Products of Integers in Array', () => {
    it('should return 40', () => {
        expect(getProductOfArray([1, 2, 3, 4, 5], 3)).toEqual(40);
    });
});
