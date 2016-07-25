import arrayMin from '../arrayMin';
import { expect } from 'chai';

describe('arrayMin', () => {
    it('should return the minimum value from the given array list', () => {
        const givenArray = arrayMin([10,20,30, 500, -1]);
        expect(givenArray).to.equal(-1);
    });
});