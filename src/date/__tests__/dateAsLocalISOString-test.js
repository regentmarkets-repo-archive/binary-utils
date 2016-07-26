import dateAsLocal from '../dateAsLocalISOString';
import { expect } from 'chai';

describe('dateAsLocalISOString', () => {
    it('should return date as localISOString', () => {
    	const theDate = new Date('2016-07-27 11:38:08');
        const givenDate = dateAsLocal(theDate);
        const expetedDate = new Date(theDate - (theDate.getTimezoneOffset() * 60 * 1000)).toISOString();
        expect(givenDate).to.equal(expetedDate);
    });
});