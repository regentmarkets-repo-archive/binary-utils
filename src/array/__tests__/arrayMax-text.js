import arrayMax from '../arrayMax';
import { expect } from 'chai';

describe('arrayMax', () => {
    it('should return the maximum value from the given array list', () => {
        const givenArray = arrayMax([10,20,30, 500, -1]);
        expect(givenArray).to.equal(500);
    });
});