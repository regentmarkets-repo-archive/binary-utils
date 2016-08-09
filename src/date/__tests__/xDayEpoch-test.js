import { expect } from 'chai';
import xDayEpoch from '../xDayEpoch'

describe('xDayEpoch', () => {
    it('should be able to add X days to the current date', () => {
        const epoch = Date.now() / 1000;
        const x = 3;
        const secsAway = x * 60 * 60 * 24
        const givenDate = xDayEpoch(3);
        const expectedDate = epoch + secsAway;
        expect(new Date(givenDate).getDay()).to.equal(new Date(expectedDate).getDay());
        expect(expectedDate - epoch).to.equal(3 * 60 * 60 * 24);
    });
});
