import { expect } from 'chai';
import todayLocaleString from '../todayLocaleString';

describe('todayLocaleString', () => {
    it('should be able to convert todays date to locale string', () => {
        const theDate = new Date();
        const expectedDate  = new Date(theDate - theDate.getTimezoneOffset() * 60 * 1000).toISOString();
        expect(todayLocaleString()).to.equal(expectedDate.slice(0, 10));
    })
})