import getLastOHLCTick from '../getLastOHLCTick';

describe('getLastOHLCTick', () => {
    it('when no input, result is undefined', () => {
        const lastTick = getLastOHLCTick();
        expect(lastTick).not.toBeDefined()
    });

    it('when no elements in the array, result is undefined', () => {
        const lastTick = getLastOHLCTick([]);
        expect(lastTick).not.toBeDefined()
    });

    it('returns last item in array', () => {
        const wuut = getLastOHLCTick([{ close: 1 }]);
        expect(wuut).toEqual(1);
    });

    it('returns last item in array, even if it is object', () => {
        const wuut = getLastOHLCTick([{ close: 1 }, { close: 4 }, { close: 5 }]);
        expect(wuut).toEqual(5);
    });
});
