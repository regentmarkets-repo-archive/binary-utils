import epochToDate from '../epochToDate';

describe('epochToDate', () => {
    it('should convert epoch to date', () => {
        const theDate = new Date('2016-07-27 11:38:08');
        const epoch = theDate.getTime();
        const givenDate = epochToDate(epoch).toDateString();
        const expectedDate = new Date(epoch * 1000).toDateString();
        expect(givenDate).toEqual(expectedDate);
    });
});
