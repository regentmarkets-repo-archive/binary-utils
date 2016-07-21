import { expect } from 'chai';
import monthsAfterStr from '../monthsAfterStr';

describe('monthsAfterStr', () => {
    it('should return a date string with given number of months ahead of the current date', () => {
        const str = new Date(monthsAfterStr(2));
        const thisMonth = (new Date()).getMonth();
        expect(thisMonth + 2).to.equal(str.getMonth());
    })
})