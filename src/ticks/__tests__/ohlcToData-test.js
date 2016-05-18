import { expect } from 'chai';
import ohlcToData from '../ohlcToData';

describe('ohlcToData', () => {
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
    it('should convert server ohlc to all numeric', () => {
        const actual = candles.map(ohlcToData);
        expect(actual[0][1]).to.be.equal(652.2254);
    });

    it('should convert server ohlc epoch to milliseconds', () => {
        const actual = candles.map(ohlcToData);
        expect(actual[0][0]).to.be.equal(1462168800000);
    });
});
