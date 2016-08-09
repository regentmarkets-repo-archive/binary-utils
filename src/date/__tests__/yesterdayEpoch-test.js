import { expect } from 'chai';
import yesterdayEpoch from '../yesterdayEpoch';

describe('yesterdayEpoch', () => {
    it("should return yesterday's date in epoch", () => {
        const x = -1;
        const secsAway = x * 60 * 60 * 24;
        const expectedDate = Math.floor(Date.now() / 1000) + secsAway;
        const givenDay = new Date(yesterdayEpoch() * 1000).getDay();
        expect(yesterdayEpoch()).to.equal(expectedDate);
        expect((new Date(yesterdayEpoch())).getDay()).to.equal((new Date(expectedDate)).getDay());
        expect(Math.floor(givenDay)).to.equal(new Date().getDay() - 1);
    });
});
