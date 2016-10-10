import todayUTCString from '../todayUTCString';

describe('todayUTCString', () => {
    it('should be able to convert todays date to UTC string', () => {
        const expectedDate = (new Date()).toISOString().slice(0, 10);
        expect(todayUTCString()).toEqual(expectedDate);
    });
});
