import { expect } from 'chai';
import doTicksEqual from '../doTicksEqual';

describe('doTicksEqual', () => {
    it('undefined ticks are equal', () => {
        const tick1 = undefined;
        const tick2 = undefined;
        expect(doTicksEqual(tick1, tick2)).to.be.true;
    });

    it('object differing in quote are not equal', () => {
        const tick1 = { epoch: 123, quote: 5 };
        const tick2 = { epoch: 123, quote: 10 };
        expect(doTicksEqual(tick1, tick2)).to.be.false;
    });

    it('object differing in epoch are not equal', () => {
        const tick1 = { epoch: 123, quote: 10 };
        const tick2 = { epoch: 456, quote: 10 };
        expect(doTicksEqual(tick1, tick2)).to.be.false;
    });

    it('object with equal epoch and quote are equal', () => {
        const tick1 = { epoch: 123, quote: 10 };
        const tick2 = { epoch: 123, quote: 10 };
        expect(doTicksEqual(tick1, tick2)).to.be.true;
    });

    it('equality comparison cares only about epoch and quote', () => {
        const tick1 = { epoch: 123, quote: 10, otherVal: 'hello' };
        const tick2 = { epoch: 123, quote: 10, otherVal: 'bye' };
        expect(doTicksEqual(tick1, tick2)).to.be.true;
    });
});
