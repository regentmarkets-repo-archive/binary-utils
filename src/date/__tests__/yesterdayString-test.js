import { expect } from 'chai';
import yesterdayString from '../yesterdayString';

describe('yesterdayString', () => { 
    it("should return the yesterday's date string", () => {
        const x = -1;
        const secsAway = x * 60 * 60 * 24;
        const newDate = Math.floor(Date.now() / 1000) + secsAway;
        const expectedDate = new Date(newDate * 1000).toISOString().slice(0,10);
        const givenDay = yesterdayString().slice(8,10);
        expect(yesterdayString()).to.equal(expectedDate);
        expect(Math.floor(givenDay)).to.equal(new Date().getDay() -1);
    })
})