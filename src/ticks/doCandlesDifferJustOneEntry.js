import doCandleEqual from './doCandleEqual';
import doArrayDifferJustOneEntry from './doArrayDifferJustOneEntry';

export default (candles1, candles2) => doArrayDifferJustOneEntry(candles1, candles2, doCandleEqual);
