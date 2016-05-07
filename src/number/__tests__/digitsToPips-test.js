import { expect } from 'chai';
import digitsToPips from '../digitsToPips';

describe('digitsToPips', () => {
    it('2 digits equal 0.01 pips', () => {
        const pips = digitsToPips(2);
        expect(pips).to.equal(0.01);
    });

    it('4 digits equal 0.0001 pips', () => {
        const pips = digitsToPips(4);
        expect(pips).to.equal(0.0001);
    });

    it('0 digits equal 1 pips', () => {
        const pips = digitsToPips(0);
        expect(pips).to.equal(1);
    });
});
