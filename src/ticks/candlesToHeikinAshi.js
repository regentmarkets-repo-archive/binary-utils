const firstHeikinAshi = (candle: Candle) => ({
  open: (candle.open + candle.close) / 2,
  high: candle.high,
  low: candle.low,
  close: (candle.open + candle.high + candle.low + candle.close) / 4,
});

const singleHeikinAshi = (cur: Candle, prev: Candle) => ({
  open: (prev.open + prev.close) / 2,
  high: Math.max(cur.high, prev.open, prev.close),
  low: Math.min(cur.low, prev.open, prev.close),
  close: (cur.open + cur.high + cur.low + cur.close) / 4,
});

export default (candles: Candle[]): Candle[] =>
  candles.reduce((list, x, idx) => {
    const heikinAshi = idx === 0 ?
      firstHeikinAshi(x) :
      singleHeikinAshi(x, list[idx - 1]);
    list.push(heikinAshi);
    return list;
  }, []);
