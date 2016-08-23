import doCandleEqual from './doCandleEqual';
import doArrayDifferJustOneEntry from './doArrayDifferJustOneEntry';

export default (candles1: Candle[], candles2: Candle[]): boolean =>
    doArrayDifferJustOneEntry(candles1, candles2, doCandleEqual);
