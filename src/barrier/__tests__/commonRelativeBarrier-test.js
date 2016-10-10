import commonRelativeBarrier from '../commonRelativeBarrier';

describe('commonRelativeBarrier', () => {
    it('should return the sum of barrier and entrySpot as commonRelativeBarrier', () => {
        const entrySpot = 123;
        const barrier = 3245;
        const lastTick = 4444;
        const relativeBarrier = commonRelativeBarrier(barrier, entrySpot, lastTick);
        expect(relativeBarrier).toEqual(entrySpot + barrier);
    });

    it('should return the sum of the barrier and lastTick when entrySpot is not given', () => {
        const entrySpot = undefined;
        const barrier = 3245;
        const lastTick = 4444;
        const relativeBarrier = commonRelativeBarrier(barrier, entrySpot, lastTick);
        expect(relativeBarrier).toEqual(barrier + lastTick);
    });
});
