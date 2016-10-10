import epochToUTCDateString from '../epochToUTCDateString';

describe('epochToUTCDateString', () => {
    it('should convert epoch to UTC Date String', () => {
        const theDate = new Date('2016-07-27 11:38:08');
        const epoch = theDate.getTime();
        const givenDate = epochToUTCDateString(epoch);
        const expectedDate = new Date(epoch * 1000).toISOString().slice(0, 10);
        expect(givenDate).toEqual(expectedDate);
    });
});
