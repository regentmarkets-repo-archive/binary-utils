import arrayMin from '../arrayMin';
import { expect } from 'chai';

describe('arrayMin', () => {
    it('should return the minimum value from an array list', () => {
        const result = arrayMin([10,20,30, 500, -1]);
        expect(result).to.equal(-1);
    });

    it('should return INFINITY as the minimum value from an empty array list', () => {
        const result = arrayMin([]);
        expect(result).to.equal(Infinity);
    });

    it('should return the minimum value from an array with two minimum values', () => {
        const result = arrayMin([1,1,4,4]);
        expect(result).to.equal(1);
    });

});