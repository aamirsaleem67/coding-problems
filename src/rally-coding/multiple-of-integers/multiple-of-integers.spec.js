import isEvenMultipleOfK from './multiple-of-integers';

describe('Multiple of integers', () => {
    it('should return true', () => {
        expect(isEvenMultipleOfK([2, 4, 6, 8], 2)).toEqual(true);
    });

    it('should return false', () => {
        expect(isEvenMultipleOfK([12, 14, 36, 18], 9)).toEqual(false);
    });
});
