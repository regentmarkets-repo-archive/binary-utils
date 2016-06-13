import { expect } from 'chai';
import candles from 'binary-test-data/candles';
import ohlcToData from '../ohlcToData';

describe('ohlcToData', () => {
    it('should convert server ohlc to all numeric', () => {
        const actual = candles.map(ohlcToData);
        expect(actual[0][1]).to.be.equal(652.2254);
    });

    it('should convert server ohlc epoch to milliseconds', () => {
        const actual = candles.map(ohlcToData);
        expect(actual[0][0]).to.be.equal(1462168800000);
    });
});
