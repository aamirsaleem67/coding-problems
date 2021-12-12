import getPersonEndPoint from './movement-of-person';

describe('Movement of a Person Given an Array', () => {
    it('should return accurate end point', () => {
        const movements = ['up', 'up', 'down', 'left', 'left', 'right', 'up'];
        expect(getPersonEndPoint(movements)).toEqual([-1, 2]);
    });
});
