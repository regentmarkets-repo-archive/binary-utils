import doCandlesDifferJustOneEntry from '../doCandlesDifferJustOneEntry';

describe('doCandlesDifferJustOneEntry', () => {
    it('two empty lists do not differ one candle', () => {
        const candles1 = [];
        const candles2 = [];
        const result = doCandlesDifferJustOneEntry(candles1, candles2);
        expect(result).toBeFalsy();
    });

    it('one empty lists and a list of one item do differ one candle', () => {
        const candles1 = [];
        const candles2 = [{ epoch: 123, close: 456 }];
        const result = doCandlesDifferJustOneEntry(candles1, candles2);
        expect(result).toBeTruthy();
    });

    it('a list that differs more than one item length do not differ one candle', () => {
        const candles1 = [{ epoch: 1 }];
        const candles2 = [{ epoch: 1 }, { epoch: 2 }, { epoch: 3 }];
        const result = doCandlesDifferJustOneEntry(candles1, candles2);
        expect(result).toBeFalsy();
    });

    it('lists that differ one item and content is offset by one, do differ one candle', () => {
        const candles1 = [{ epoch: 1 }, { epoch: 2 }];
        const candles2 = [{ epoch: 1 }, { epoch: 2 }, { epoch: 3 }];
        const result = doCandlesDifferJustOneEntry(candles1, candles2);
        expect(result).toBeTruthy();
    });

    it('lists that differ one item but content is not offset by one, do not differ one candle', () => {
        const candle1 = [{ epoch: 2 }, { epoch: 1 }];
        const candle2 = [{ epoch: 1 }, { epoch: 2 }, { epoch: 3 }];
        const result = doCandlesDifferJustOneEntry(candle1, candle2);
        expect(result).toBeFalsy();
    });

    it('lists that are the same length but have offseted values, do differ one candle', () => {
        const candle1 = [{ epoch: 1 }, { epoch: 2 }, { epoch: 3 }];
        const candle2 = [{ epoch: 2 }, { epoch: 3 }, { epoch: 4 }];
        const result = doCandlesDifferJustOneEntry(candle1, candle2);
        expect(result).toBeTruthy();
    });
});
