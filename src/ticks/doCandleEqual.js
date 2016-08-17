import type { Candle } from '../types';

export default (ohlc1: Candle, ohlc2: Candle): boolean =>
    !ohlc1 && ohlc1 === ohlc2 ||
    !!ohlc1 && !!ohlc2 && ohlc1.epoch === ohlc2.epoch && ohlc1.close === ohlc2.close;
