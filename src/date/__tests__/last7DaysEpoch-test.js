import last7DaysEpoch from '../last7DaysEpoch';

describe('last7DaysEpoch', () => {
    it('should return the last 7Days of the date in Epoch', () => {
        const range = -6 * 60 * 60 * 24;
        const exptedEpoch = Math.floor(Date.now() / 1000) + range;
        const givenEpoch = last7DaysEpoch();
        expect(exptedEpoch).toEqual(givenEpoch);
    });
});
