import findSequence from './sequence-of-integers-in-array';

describe('Find Sequence of Integers in Another Array', () => {
    it('should return true', () => {
        expect(findSequence([1, 2, 3, 4, 5, 6], [3, 4, 5])).toEqual(true);
    });

    it('should return false', () => {
        expect(findSequence([1, 2, 3, 4, 5, 6], [3, 5])).toEqual(false);
    });

    it('should work with duplication', () => {
        expect(findSequence([3, 3, 4], [3, 4])).toEqual(true);
    });
});
