import getLastOccurenceIndex from './last-occurence-in-array';

describe('Find Last Occurrence of Integer in Array', () => {
    it('should return a single integer', () => {
        const index = getLastOccurenceIndex([4, 1, 3, 5, 3, 4, 2], 4);
        expect(index).toEqual(5);
    });

    it('should work with negative numbers', () => {
        const index = getLastOccurenceIndex([-1, -1, 3, 5, 3, 2], -1);
        expect(index).toEqual(1);
    });
});
