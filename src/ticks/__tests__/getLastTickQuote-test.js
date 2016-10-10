import getLastTickQuote from '../getLastTickQuote';

describe('getLastTickQuote', () => {
    it('does not throw on empty input', () => {
        expect(() => getLastTickQuote()).not.toThrow();
        expect(getLastTickQuote()).toEqual(undefined);
    });

    it('does not throw on empty list as input', () => {
        expect(() => getLastTickQuote([])).not.toThrow();
        expect(getLastTickQuote([])).toEqual(undefined);
    });

    it('single item as input, is returned as output', () => {
        expect(getLastTickQuote([{ quote: 5 }])).toEqual(5);
    });

    it('when passed multiple items, last one is returned', () => {
        expect(getLastTickQuote([{ quote: 1 }, { quote: 2 }, { quote: 3 }])).toEqual(3);
    });
});
