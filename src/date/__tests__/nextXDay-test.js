import nextXDay from '../nextXDay';
import { expect } from 'chai';

describe('nextXDay', () => {
    it("should return X days ahead of today's date", () => {
        const theDate = new Date();
        theDate.setDate(theDate.getDate() + 20);
        const givenDate = nextXDay(20);
        expect(givenDate.toDateString()).to.equal(theDate.toDateString());
    })
})