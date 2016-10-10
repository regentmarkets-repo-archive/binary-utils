import epochToDateTimeString from '../epochToDateTimeString';

describe('epochToDateTimeString', () => {
    it('should convert epoch to datetime string', () => {
        const theDate = new Date('2016-07-27 11:38:08');
        const epoch = theDate.getTime();
        const givenDateTime = epochToDateTimeString(epoch);
        const expectedDateTime = new Date(epoch * 1000).toUTCString();
        expect(givenDateTime).toEqual(expectedDateTime);
    });
});
