import candles from 'binary-test-data/candles';
import ohlcToTicks from '../ohlcToTicks';

describe('ohlcToTicks', () => {
    it('should convert ohlc candle data format to ticks data format', () => {
        const expected = [{
            quote: 652.2254,
            epoch: 1462168800,
        }, {
            quote: 651.727,
            epoch: 1462168860,
        }];

        const actual = ohlcToTicks(candles);

        expect(actual).toEqual(expected);
    });
});
