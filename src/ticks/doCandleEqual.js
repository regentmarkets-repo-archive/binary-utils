export default (ohlc1, ohlc2) =>
    !ohlc1 && ohlc1 === ohlc2 ||
    !!ohlc1 && !!ohlc2 && ohlc1.epoch === ohlc2.epoch && ohlc1.close === ohlc2.close;

