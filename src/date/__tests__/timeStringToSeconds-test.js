import timeStringToSeconds from '../timeStringToSeconds';

describe('timeStringToSeconds', () => {
    it('should convert time string to seconds', () => {
        const time = '02:30';
        const expectedSeconds = (60 * 60 * 2) + (60 * 30);
        expect(timeStringToSeconds(time)).toEqual(expectedSeconds);
    });

    it('should be wrong when wrong time format is used', () => {
        const time = '0230';
        const expectedSeconds = (60 * 60 * 2) + (60 * 30);
        expect(timeStringToSeconds(time)).not.toEqual(expectedSeconds);
    });
});
