import { expect } from 'chai';
import doCandleEqual from '../doCandleEqual';

describe('doCandleEqual', () => {
    it('undefined does not equal a candle', () => {
        const candle1 = undefined;
        const candle2 = {};
        const result = doCandleEqual(candle1, candle2);
        expect(result).to.be.false;
    });

    it('candles with different times are not equal', () => {
        const candle1 = { epoch: 123 };
        const candle2 = { epoch: 231 };
        const result = doCandleEqual(candle1, candle2);
        expect(result).to.be.false;
    });

    it('candles with different close values are not equal', () => {
        const candle1 = { close: 123 };
        const candle2 = { close: 231 };
        const result = doCandleEqual(candle1, candle2);
        expect(result).to.be.false;
    });

    it('candles with the same epoch and close values are equal', () => {
        const candle1 = { epoch: 123, close: 456 };
        const candle2 = { epoch: 123, close: 456 };
        const result = doCandleEqual(candle1, candle2);
        expect(result).to.be.true;
    });

    it('no other value in OHLC is compared, epoch and close solely determine equality', () => {
        const candle1 = { epoch: 123, open: 11111, high: 22222, low: 33333, close: 123 };
        const candle2 = { epoch: 123, open: 44444, high: 55555, low: 66666, close: 123 };
        const result = doCandleEqual(candle1, candle2);
        expect(result).to.be.true;
    });
});
