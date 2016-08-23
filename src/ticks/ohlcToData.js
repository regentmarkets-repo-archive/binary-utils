// open_time is used when data is stream
export default (candle: Candle): ChartCandle => [
    +(candle.open_time || candle.epoch) * 1000,
    +candle.open,
    +candle.high,
    +candle.low,
    +candle.close,
];
