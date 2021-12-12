import getStringAtChar from './string-at-char';

describe('get string at char', () => {
    it('should work with spaces in the string', () => {
        const text = getStringAtChar('apples\nmilk\nbread\nfish\n', 2);
        expect(text).toEqual('milk');
    });
    it('should work with lower and upper case', () => {
        const text = getStringAtChar('Beverly Hills\nSagaponack\nSanta Monica\n', 1);
        expect(text).toEqual('Beverly Hills');
    });
});
