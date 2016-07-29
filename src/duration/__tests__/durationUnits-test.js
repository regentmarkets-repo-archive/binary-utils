import { expect } from 'chai';
import durationUnits from '../durationUnits';

describe('durationUnit', () => {
    it('should return durationUnits of type array', () => {
        expect(durationUnits).to.be.instanceOf(Array);
    })
});

