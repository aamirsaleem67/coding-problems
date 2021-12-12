import getEndPoint from './movement-on-xy-plan-2d-array';

describe('Movement on an X-Y Plane with 2D Arrays', () => {
    it('should return end point ([4,0])', () => {
        const endPoint = getEndPoint([
            [1, 0],
            [0, -3],
            [3, 3]
        ]);

        expect(endPoint).toEqual(expect.arrayContaining([4, 0]));
    });
});
