import { expect } from 'chai';
import timeStringIsBetween from '../../src/date/timeStringIsBetween';

describe('timeStringIsBetween', () => {
    it('should return true if target string is between start and end time string', () => {
        const target = '09:00:22';
        const start = '08:00:00';
        const end = '10:10:00';

        expect(timeStringIsBetween(start, end, target)).to.be.true;
    });

    it('should return false if target string is outside of start and end time string', () => {
        const target = '07:00:22';
        const start = '08:00:00';
        const end = '10:10:00';

        expect(timeStringIsBetween(start, end, target)).to.be.false;
    });

    it('should return true if start time is larger than end time, and target time is within range', () => {
        const target = '12:00:22';
        const start = '10:10:00';
        const end = '08:00:00';

        expect(timeStringIsBetween(start, end, target)).to.be.true;
    });

    it('should return false if start time is larger than end time, and target time is out of range', () => {
        const target = '09:00:22';
        const start = '10:10:00';
        const end = '08:00:00';

        expect(timeStringIsBetween(start, end, target)).to.be.false;
    });
});
