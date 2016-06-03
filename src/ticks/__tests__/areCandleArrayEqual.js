import { expect } from 'chai';
import areOHLCArraysEqual from '../areCandleArrayEqual';

describe('areOHLCArraysEqual', () => {
    it('two empty tick lists are equal', () => {
        const ticks1 = [];
        const ticks2 = [];
        const result = areOHLCArraysEqual(ticks1, ticks2);
        expect(result).to.equal(true);
    });

    it('tick lists with different legths are never equal', () => {
        const ticks1 = [];
        const ticks2 = [1];
        const result = areOHLCArraysEqual(ticks1, ticks2);
        expect(result).to.equal(false);
    });

    it('ticks lists with same epoch & close as last item equal', () => {
        const ticks1 = [{ epoch: 1, close: 123 }];
        const ticks2 = [{ epoch: 1, close: 123 }];
        const result = areOHLCArraysEqual(ticks1, ticks2);
        expect(result).to.equal(true);
    });

    it('ticks lists with same epoch but different close as last item does not equal', () => {
        const ticks1 = [{ epoch: 1, close: 123 }];
        const ticks2 = [{ epoch: 1, close: 456 }];
        const result = areOHLCArraysEqual(ticks1, ticks2);
        expect(result).to.equal(false);
    });
});

