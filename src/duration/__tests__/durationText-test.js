import { expect } from 'chai';
import unit from '../durationText';

describe('durationText', () => {
    it('should return durationText of the given unit', () => {
        expect(unit('t')).to.equal('Ticks');
    })
});

