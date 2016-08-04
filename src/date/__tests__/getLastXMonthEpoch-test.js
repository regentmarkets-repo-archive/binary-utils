import { expect } from 'chai';
import getLastXMonthEpoch from '../getLastXMonthEpoch';

describe('getLastXMonthEpoch', () => {
    it('should return the epoch of the last X month', () => {
        const theDate = new Date();
        const x = 2;
        const givenEpoch = getLastXMonthEpoch(x)
        theDate.setMonth(theDate.getMonth() - x);
        const expectedEpoch = Math.floor(theDate.getTime() / 1000);
        expect(expectedEpoch).to.equal(givenEpoch);
    })
})