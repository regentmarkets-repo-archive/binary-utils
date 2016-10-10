import dateToTimeString from '../dateToTimeString';

describe('dateToTimeString', () => {
    it('should convert date to time string', () => {
        const theDate = new Date('2016-07-27 11:38:08');
        const givenTime = dateToTimeString(theDate);
        const newDate = new Date(theDate - (theDate.getTimezoneOffset() * 60 * 1000)).toISOString();
        const expectedTime = newDate.slice(11, 19);
        expect(givenTime).toEqual(expectedTime);
        expect(expectedTime).toEqual('11:38:08');
    });
});
