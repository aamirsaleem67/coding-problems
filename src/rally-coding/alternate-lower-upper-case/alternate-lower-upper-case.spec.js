import alternateLowerUpperCase from './alternate-lower-upper-case';

describe('Alternate Between Upper and Lower Case Characters', () => {
    it('should return an array of strings', () => {
        const elements = alternateLowerUpperCase(['a', 'b', 'c', 'd', 'e']);
        expect(elements.length).toEqual(5);
        expect(elements).toEqual(expect.arrayContaining(['a', 'B', 'c', 'D', 'e']));
    });
});
