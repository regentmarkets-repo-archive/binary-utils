import epoch from '../dateToEpoch';
import { expect } from 'chai';

describe('dateAsLocalISOString', () => {
    it('should convert given date to an Epoch', () => {
    	const theDate = new Date('2016-07-27 11:38:08');
        const givenDate = epoch(theDate);
        const expetedDate = Math.floor(theDate.getTime() / 1000);
        expect(givenDate).to.equal(expetedDate);
    });
});