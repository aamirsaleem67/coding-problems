import isPrefix from './prefix-of-string';

describe('Prefix of string', () => {
    it('should return false', () => {
        expect(isPrefix('banner', 'bang')).toBe(false);
    });

    it('should return true', () => {
        expect(isPrefix('hugging', 'hug')).toBe(true);
    });
});
