import doCandleEqual from './doCandleEqual';

export default (candles1, candles2) => {
    const lengthDiff = Math.abs(candles1.length - candles2.length);

    if (lengthDiff !== 1 && candles1.length === 0) {
        return false;
    }

    return doCandleEqual(candles1[candles1.length - 1], candles2[candles2.length - 2])
        || doCandleEqual(candles1[candles1.length - 2], candles2[candles2.length - 1]);
};
