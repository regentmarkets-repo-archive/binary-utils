export default (ohlc1, ohlc2) => {
    const o1Len = ohlc1.length;
    const o2Len = ohlc2.length;

    if (o1Len !== o2Len) {
        return false;
    }

    if (o1Len === 0) {
        return true;
    }

    const o1Last = ohlc1[o1Len - 1];
    const o2Last = ohlc2[o2Len - 1];

    return (o1Last.epoch === o2Last.epoch && o1Last.close === o2Last.close);
};
