import { expect } from 'chai';
import getLastTickQuote from '../getLastTickQuote';

describe('getLastTickQuote', () => {
    it('when no input, result is undefined', () => {
        const lastTick = getLastTickQuote();
        expect(lastTick).to.be.undefined;
    });

    it('when no elements in the array, result is undefined', () => {
        const lastTick = getLastTickQuote([]);
        expect(lastTick).to.be.undefined;
    });

    it('returns last item in array', () => {
        const wuut = getLastTickQuote([1]);
        expect(wuut).to.equal(1);
    });

    it('returns last item in array, even if it is object', () => {
        const wuut = getLastTickQuote([{ quote: 5 }]);
        expect(wuut).to.deep.equal({ quote: 5 });
    });
});
