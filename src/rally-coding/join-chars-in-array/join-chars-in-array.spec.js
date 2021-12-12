import joinCharsInArray from './join-chars-in-array';

describe('join characters in array', () => {
    it('example # 1 - should return single string', () => {
        const text = joinCharsInArray(['Hi', 'there', 'how', 'are', 'you'], '_');
        expect(text).toEqual('Hi_there_how_are_you');
    });

    it('example # 2 - should return single string', () => {
        const text = joinCharsInArray(['a', 'a', 'a'], 'b');
        expect(text).toEqual('ababa');
    });
});
