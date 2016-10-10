import isMobile from '../isMobile';

describe('isMobile', () => {
    it('returns false when no window object exists', () => {
        expect(isMobile()).toBeFalsy();
    });
});
