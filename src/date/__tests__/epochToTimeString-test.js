import epochToTimeString from '../epochToTimeString';

describe('epochToTimeString', () => {
    it('should convert epoch to time string', () => {
        const theDate = new Date('2016-07-27 11:38:08');
        const epoch = theDate.getTime();
        const givenTime = epochToTimeString(epoch);
		const newDate = new Date((new Date(epoch * 1000)) - ((new Date(epoch * 1000)).getTimezoneOffset() * 60 * 1000)).toISOString();
        const expectedTime = newDate.slice(11, 19);
        expect(expectedTime).toEqual(givenTime);
    });
});
