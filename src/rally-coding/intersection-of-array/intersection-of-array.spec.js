import findIntersection from './intersection-of-array';

describe('Intersection of an Array', () => {
    it('example # 1 - should return array of integers', () => {
        expect(findIntersection([1, 2, 3, 4, 5], [4, 2])).toEqual(expect.arrayContaining([2, 4]));
    });

    it('example # 2 - should return array of integers', () => {
        expect(findIntersection([2, 5, 6, 9, 13, 1], [1, 6, 13, 7])).toEqual(
            expect.arrayContaining([6, 13, 1])
        );
    });

    it('example # 3 - should return array of integers', () => {
        expect(findIntersection([1, -2, 3, -4, 5], [-4, -2])).toEqual(
            expect.arrayContaining([-2, -4])
        );
    });
});
