import arrayMax from '../arrayMax';
import { expect } from 'chai';

describe('arrayMax', () => {
    it('should return the maximum value from the array list', () => {
        const result = arrayMax([10,20,30, 500, -1]);
        expect(result).to.equal(500);
    });

    it('should return -INFINITY as the maximum value from an empty array list', () => {
        const result = arrayMax([]);
        expect(result).to.equal(-Infinity);
    });

    it('should return the maximum value from an array with two maximum values', () => {
        const result = arrayMax([1,2,4,4]);
        expect(result).to.equal(4);
    });
});