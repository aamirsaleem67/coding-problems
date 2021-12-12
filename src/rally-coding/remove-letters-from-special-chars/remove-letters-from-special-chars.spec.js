import removeParenthesis from './remove-letters-from-special-chars';

describe('Remove parenthesis', () => {
    it('example # 1 - should remove parenthesis', () => {
        const value = removeParenthesis('(a)(b)((c))(((d)))');
        expect(value).toEqual('abcd');
    });

    it('example # 2 - should remove parenthesis', () => {
        const value = removeParenthesis('((ab)(cd)()()df)');
        expect(value).toEqual('abcddf');
    });
});
