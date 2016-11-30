const singleHeikinAshi = (cur: Candle, prev: Candle) => ({
  open: (prev.open + prev.close) / 2,
  high: Math.max(cur.high, prev.open, prev.close),
  low: Math.min(cur.low, prev.open, prev.close),
  close: (cur.open + cur.high + cur.low + cur.close) / 4,
});

export default (candles: Candle[]): Candle[] => {
  const ha = [];

  candles.forEach((x, idx) => {
    const prev = idx > 0 ? ha[idx - 1] : candles[0];
    ha.push(singleHeikinAshi(x, prev));
  });

  return ha;
};
