import { expect } from 'chai';
import getLastTickQuote from '../getLastTickQuote';

describe('getLastTickQuote', () => {
    it('does not throw on empty input', () => {
        expect(getLastTickQuote()).to.not.throw;
        expect(getLastTickQuote()).to.equal(undefined);
    });

    it('does not throw on empty list as input', () => {
        expect(getLastTickQuote([])).to.not.throw;
        expect(getLastTickQuote([])).to.equal(undefined);
    });

    it('single item as input, is returned as output', () => {
        expect(getLastTickQuote([{ quote: 5 }])).to.equal(5);
    });

    it('when passed multiple items, last one is returned', () => {
        expect(getLastTickQuote([{ quote: 1 }, { quote: 2 }, { quote: 3 }])).to.equal(3);
    });
});
