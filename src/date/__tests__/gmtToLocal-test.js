import { expect } from 'chai';
import gmtToLocal from '../gmtToLocal';

describe('gmtToLocal', () => {
    it('should convert gmt to local Date', () => {
        const theDate = new Date();
        const expectedDate = new Date(theDate - (theDate.getTimezoneOffset() * 60 * 1000));
        const givenDate = gmtToLocal(theDate);
        expect(givenDate.toDateString()).to.equal(expectedDate.toDateString());
    });
});
