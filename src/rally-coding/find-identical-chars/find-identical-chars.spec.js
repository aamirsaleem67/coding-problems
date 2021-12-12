import findIdenticalChars from './find-identical-chars';

describe('Find Identical Characters in a Row', () => {
    it('should return true', () => {
        expect(findIdenticalChars('terrific')).toEqual(true);
    });

    it('should return false', () => {
        expect(findIdenticalChars('cats')).toEqual(false);
    });

    it('should work with special chars', () => {
        expect(findIdenticalChars('cats!!')).toEqual(true);
    });
});
