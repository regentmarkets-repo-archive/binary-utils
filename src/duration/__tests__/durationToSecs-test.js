import durationToSecs from '../durationToSecs';

describe('durationToSecs', () => {
    it('throws when duration unit is not recognized', () => {
        expect(() => durationToSecs(-10, 'random')).toThrow();
    });

    it('when unit is "s" treat input as seconds', () => {
        expect(durationToSecs(-1, 's')).toEqual(-1);
        expect(durationToSecs(0, 's')).toEqual(0);
        expect(durationToSecs(10, 's')).toEqual(10);
        expect(durationToSecs(100, 's')).toEqual(100);
    });

    it('when unit is "t" treat input as seconds', () => {
        expect(durationToSecs(123, 's')).toEqual(123);
    });

    it('when unit is "m" treat input as minutes', () => {
        expect(durationToSecs(-1, 'm')).toEqual(-60);
        expect(durationToSecs(0, 'm')).toEqual(0);
        expect(durationToSecs(10, 'm')).toEqual(600);
        expect(durationToSecs(100, 'm')).toEqual(6000);
    });

    it('when unit is "h" treat input as hours', () => {
        expect(durationToSecs(-1, 'h')).toEqual(-3600);
        expect(durationToSecs(0, 'h')).toEqual(0);
        expect(durationToSecs(10, 'h')).toEqual(36000);
        expect(durationToSecs(100, 'h')).toEqual(360000);
    });

    it('when unit is "s" treat as days', () => {
        expect(durationToSecs(-1, 'd')).toEqual(-86400);
        expect(durationToSecs(0, 'd')).toEqual(0);
        expect(durationToSecs(10, 'd')).toEqual(864000);
        expect(durationToSecs(100, 'd')).toEqual(8640000);
    });
});
