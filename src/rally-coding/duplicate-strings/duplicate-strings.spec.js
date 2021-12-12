import duplicateStrings from './duplicate-strings';

describe('Duplicating strings', () => {
    it('should return array of strings', () => {
        const duplicatedStrings = duplicateStrings('abc', 5);
        expect(duplicatedStrings).toEqual(
            expect.arrayContaining(['abc', 'abc', 'abc', 'abc', 'abc'])
        );
    });

    it('should work with lower and upper case', () => {
        const duplicatedStrings = duplicateStrings('Hi!', 3);
        expect(duplicatedStrings).toEqual(expect.arrayContaining(['Hi!', 'Hi!', 'Hi!']));
    });
});
