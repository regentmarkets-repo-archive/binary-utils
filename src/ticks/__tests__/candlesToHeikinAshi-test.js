import candlesToHeikinAshi from '../candlesToHeikinAshi';

const roundValue = (value: number, digits: number = 3) =>
  Math.round(value * (10 ** digits)) / (10 ** digits);

const roundCandle = (candle: Candle, digits: number = 3) => ({
  open: roundValue(candle.open, digits),
  high: roundValue(candle.high, digits),
  low: roundValue(candle.low, digits),
  close: roundValue(candle.close, digits),
});

describe('candlesToHeikinAshi', () => {
    it('empty candles list results in empty heikin ashi', () => {
        const candles = [];
        const heikinAshi = [];
        const result = candlesToHeikinAshi(candles);
        expect(result).toEqual(heikinAshi);
    });

    it('one candle', () => {
      const candles = [
        { open: 1, high: 2, low: 3, close: 4 },
      ];
      const heikinAshi = [
        { open: 0, high: 0, low: 0, close: 0 },
      ];
      const result = candlesToHeikinAshi(candles).map(x => roundCandle(x, 2));
      expect(result).toEqual(heikinAshi);
    });

    it('one candle', () => {
      const candles = [
        { open: 56.67, high: 58.82, low: 57.03, close: 57.73 },
      ];
      const heikinAshi = [
        { open: 56.67, high: 58.82, low: 57.03, close: 58.06 },
      ];
      const result = candlesToHeikinAshi(candles).map(x => roundCandle(x, 2));
      expect(result).toEqual(heikinAshi);
    });

    it('multiple candles', () => {
      const candles = [
        { open: 56.67, high: 58.82, low: 57.03, close: 57.73 },
        { open: 57.46, high: 57.72, low: 56.21, close: 56.27 },
      ];
      const heikinAshi = [
        { open: 56.67, high: 58.82, low: 57.03, close: 58.06 },
        { open: 58.37, high: 58.37, low: 56.21, close: 56.92 },
      ];
      const result = candlesToHeikinAshi(candles).map(x => roundCandle(x, 2));
      expect(result).toEqual(heikinAshi);
    });
});
