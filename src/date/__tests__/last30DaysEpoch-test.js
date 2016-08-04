import last30DaysEpoch from '../last30DaysEpoch';
import { expect } from 'chai';

describe('last30DaysEpoch', () => {
    it('should return the last 30Days of the date in Epoch', () =>{
        const range = -29 * 60 * 60 * 24;
        const exptedEpoch = Math.floor(Date.now() / 1000) + range;
        const givenEpoch = last30DaysEpoch();
        expect(exptedEpoch).to.equal(givenEpoch);
    })
})