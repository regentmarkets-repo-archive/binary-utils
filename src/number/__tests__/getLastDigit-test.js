import { expect } from 'chai';
import getLastDigit from '../getLastDigit';

describe('getLastDigit', () => {
    it('when no second parameter, pip is 0', () => {
        expect(getLastDigit(1)).to.equal(1);
        expect(getLastDigit(12)).to.equal(2);
        expect(getLastDigit(123)).to.equal(3);
        expect(getLastDigit(0.1)).to.equal(0);
        expect(getLastDigit(0.123)).to.equal(0);
    });

    it('when a parameter is provided, it is used to calculate last digit', () => {
        expect(getLastDigit(0.1, 1)).to.equal(1);
        expect(getLastDigit(0.12, 1)).to.equal(1);
        expect(getLastDigit(123, 1)).to.equal(0);
        expect(getLastDigit(123.45, 0)).to.equal(3);
        expect(getLastDigit(123.45, 5)).to.equal(0);
        expect(getLastDigit(0.123, 2)).to.equal(2);
        expect(getLastDigit(123.456, 3)).to.equal(6);
    });
});
