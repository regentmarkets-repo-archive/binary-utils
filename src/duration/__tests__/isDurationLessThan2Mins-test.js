import isDurationLessThan2Mins from '../isDurationLessThan2Mins';

describe('isDurationLessThan2Mins', () => {
    it('should return true when durationUnit is tick', () => {
        const result = isDurationLessThan2Mins(null, 't');
        expect(result).toBeTruthy();
    });

    it('should return true when duration in seconds is lessthan 120', () => {
        const result = isDurationLessThan2Mins(2, 's');
        expect(result).toBeTruthy();
    });

    it('should return false when duration in seconds is greaterthan 120', () => {
        const result = isDurationLessThan2Mins(121, 's');
        expect(result).toBeFalsy();
    });

    it('should throw exception when durationUnit is not provided', () => {
        expect(() => isDurationLessThan2Mins(121, null)).toThrow('Duration unit not valid');
    });
});
