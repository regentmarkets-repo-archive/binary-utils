import { expect } from 'chai';
import xMonthsAfter from '../xMonthsAfter';

describe('monthsAfterStr', () => {
    it('It should increase given date by x month', () => {
        const newDate = xMonthsAfter(20);
        const thisMonth = (new Date()).getMonth();
        expect((thisMonth + 20) % 12).to.equal(newDate.getMonth());
    });
});
