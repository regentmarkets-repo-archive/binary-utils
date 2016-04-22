export default (contract, lastTick, barrierEntryName = 'barrier') => {
    const barrierValue = +contract[barrierEntryName];
    if (!barrierValue) {
        return lastTick;
    }
    if (contract.barrierType === 'absolute') {
        return barrierValue;
    }
    return barrierValue + (+contract.entry_spot || lastTick);
};
