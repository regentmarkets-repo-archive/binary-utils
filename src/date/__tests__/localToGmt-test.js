import { expect } from 'chai';
import localToGmt from '../localToGmt';

describe('localToGmt', () => {
    it('should convert local to gmt Date', () => {
        const theDate = new Date();
        const expectedDate = new Date(theDate + (theDate.getTimezoneOffset() * 60 * 1000));
        const givenDate = localToGmt(theDate);
        expect(givenDate.toDateString()).to.equal(expectedDate.toDateString());
    });
});
