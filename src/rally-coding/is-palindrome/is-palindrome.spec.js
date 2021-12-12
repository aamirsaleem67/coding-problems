import isPalindrome from './is-palindrome';

describe('Check if a String is a Palindrome', () => {
    it('example # 1 - should return true', () => {
        expect(isPalindrome('abba')).toEqual(true);
    });

    it('example # 2 - should return true', () => {
        expect(isPalindrome('racecar!')).toEqual(false);
    });

    it('example # 3 - should return true', () => {
        expect(isPalindrome('ab ba')).toEqual(true);
    });

    it('example # 4 - should return true', () => {
        expect(isPalindrome('race car')).toEqual(false);
    });
});
