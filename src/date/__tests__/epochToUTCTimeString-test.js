import epochToUTCTimeString from '../epochToUTCTimeString';

describe('epochToUTCTimeString', () => {
    it('should convert epoch to a UTC time string', () => {
        const theDate = new Date('2016-07-27 11:38:08');
        const epoch = theDate.getTime();
        const givenTime = epochToUTCTimeString(epoch);
        const expectedTime = (new Date(epoch * 1000)).toISOString().slice(11, 19);
        expect(givenTime).toEqual(expectedTime);
    });
});
