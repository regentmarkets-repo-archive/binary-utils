import { expect } from 'chai';
import ohlcToTicks from '../ohlcToTicks';

describe('ohlcToTicks', () => {
    it('should convert ohlc candle data format to ticks data format', () => {
        const candles = [
            {
                "open": "652.2254",
                "high": "652.2369",
                "epoch": 1462168800,
                "close": "651.7533",
                "low": "651.7533"
            },
            {
                "open": "651.727",
                "high": "652.1119",
                "epoch": 1462168860,
                "close": "651.9476",
                "low": "651.6246"
            }
        ];

        const expected = [
            {
                quote: 652.2254,
                epoch: 1462168800,
            },
            {
                quote: 651.727,
                epoch: 1462168860,
            }
        ];

        const actual = ohlcToTicks(candles);

        expect(actual).to.be.deep.equal(expected);
    });
});
