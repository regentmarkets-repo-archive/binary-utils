export default (candles: Candle[]): ?number =>
    candles && (candles.length === 0 ? undefined : +(candles[candles.length - 1].close));
