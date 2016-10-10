import dateToUTCTimeString from '../dateToUTCTimeString';

describe('dateToUTCTimeString', () => {
    it('should convert date to a UTCTimeString', () => {
        const theDate = new Date('2016-07-27 11:38:08');
        const givenTime = dateToUTCTimeString(theDate);
        const expectedTime = theDate.toISOString().slice(11, 19);
        expect(givenTime).toEqual(expectedTime);
    });
});
