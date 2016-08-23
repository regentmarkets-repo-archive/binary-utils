import { expect } from 'chai';
import getLast from '../getLast';

describe('getLast', () => {
    it('when no input, result is undefined', () => {
        const lastTick = getLast();
        expect(lastTick).to.be.undefined;
    });

    it('when no elements in the array, result is undefined', () => {
        const lastTick = getLast([]);
        expect(lastTick).to.be.undefined;
    });

    it('returns last item in array', () => {
        const wuut = getLast([1]);
        expect(wuut).to.equal(1);
    });

    it('returns last item in array, even if it is object', () => {
        const wuut = getLast([{ quote: 5 }]);
        expect(wuut).to.deep.equal({ quote: 5 });
    });
});

