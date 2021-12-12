import sumArray from './sum-array';

describe('Sum array', () => {
    it('should return 10', () => {
        expect(sumArray([1, 5, 4])).toEqual(10);
    });

    it('should return 5', () => {
        expect(sumArray([10, -1, -4])).toEqual(5);
    });
});
