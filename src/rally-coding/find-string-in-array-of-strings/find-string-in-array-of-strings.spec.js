import findValueInStrings from './find-string-in-array-of-strings';

describe('Find string in array of strings', () => {
    it('should return true', () => {
        expect(findValueInStrings(['apple', 'orange', 'banana'], 'orange')).toEqual(true);
    });

    it('should return false', () => {
        expect(findValueInStrings(['apple', 'orange', 'banana'], 'pear')).toEqual(false);
    });
});
