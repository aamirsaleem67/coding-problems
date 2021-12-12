import splitStrings from './split-strings';

describe('Splitting strings', () => {
    it('should return array of length 3', () => {
        const strings = splitStrings('aabbbcccd', 3);
        expect(strings.length).toEqual(3);
        expect(strings).toEqual(expect.arrayContaining(['aab', 'bbc', 'ccd']));
    });

    it('should return array of length 2', () => {
        const strings = splitStrings('abcdefgh', 5);
        expect(strings.length).toEqual(2);
        expect(strings).toEqual(expect.arrayContaining(['abcde', 'fgh']));
    });
});
