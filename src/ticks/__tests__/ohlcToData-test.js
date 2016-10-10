import candles from 'binary-test-data/candles';
import ohlcToData from '../ohlcToData';

describe('ohlcToData', () => {
    it('should convert server ohlc to all numeric', () => {
        const actual = candles.map(ohlcToData);
        expect(actual[0][1]).toEqual(652.2254);
    });

    it('should convert server ohlc epoch to milliseconds', () => {
        const actual = candles.map(ohlcToData);
        expect(actual[0][0]).toEqual(1462168800000);
    });
});
