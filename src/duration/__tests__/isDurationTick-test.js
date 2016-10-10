import isDurationTick from '../isDurationTick';

describe('isDurationTick', () => {
    it('should return false when duration is undefined', () => {
        expect(isDurationTick()).toBeFalsy();
    });

     it('should return false where duration is not tick', () => {
        expect(isDurationTick('s')).toBeFalsy();
    });

     it('should return true where duration is tick', () => {
        expect(isDurationTick('t')).toBeTruthy();
    });
});
