import { expect } from 'chai';
import monthsAfterStr from '../monthsAfterStr';

describe('monthsAfterStr', () => {
    it('should return a date str with given number of months ahead', () => {
        const str = new Date(monthsAfterStr(2));
        const thisMonth = (new Date()).getMonth();
        expect(thisMonth + 2).to.equal(str.getMonth());
    })
})