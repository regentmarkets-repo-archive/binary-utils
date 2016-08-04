import { expect } from 'chai';
import areArraysEqual from '../areArraysEqual';

describe('areArraysEqual', () => {
    it('empty arrays are equal', () => {
        const ticks1 = [];
        const ticks2 = [];
        const result = areArraysEqual(ticks1, ticks2);
        expect(result).to.be.true;
    });

    it('different arrays are not equal', () => {
        const ticks1 = [];
        const ticks2 = [1, 2, 3];
        const result = areArraysEqual(ticks1, ticks2);
        expect(result).to.be.false;
    });

    it('arrays that are the same are equal', () => {
        const ticks1 = [1, 2, 3];
        const ticks2 = ticks1;
        const result = areArraysEqual(ticks1, ticks2);
        expect(result).to.be.true;
    });

    it('arrays that have the same values are equal', () => {
        const ticks1 = [1, 2, 3];
        const ticks2 = [1, 2, 3];
        const result = areArraysEqual(ticks1, ticks2);
        expect(result).to.be.true;
    });
});
