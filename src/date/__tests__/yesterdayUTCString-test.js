import { expect } from 'chai';
import yesterdayUTCString from '../yesterdayUTCString';

describe("yesterdayUTCString", () => {
    it("it should return yesterday's date in UTC string format", () => {
        const x = -1;
        const secsAway = x * 60 * 60 * 24;
        const newDate = Math.floor(Date.now() / 1000) + secsAway;
        const expectedDate = new Date(newDate * 1000).toISOString().slice(0,10);
        const givenDay = yesterdayUTCString().slice(8,10);
        expect(yesterdayUTCString()).to.equal(expectedDate);
        expect(Math.floor(givenDay)).to.equal(new Date().getDay() -1);
    })
})

