import isIntraday from '../isIntraday';

describe('isIntraday', () => {
    it('is intraday', () => {
        expect(isIntraday(1, 't')).toBeTruthy();
        expect(isIntraday(1, 's')).toBeTruthy();
        expect(isIntraday(1, 'm')).toBeTruthy();
        expect(isIntraday(1, 'h')).toBeTruthy();
        expect(isIntraday(23, 'h')).toBeTruthy();
    });

    it('not intraday', () => {
        expect(isIntraday(1, 'd')).toBeFalsy();
        expect(isIntraday(100, 'd')).toBeFalsy();
        expect(isIntraday(30, 'h')).toBeFalsy();
    });
});
