export default (contract, lastTick, barrierEntryName = 'barrier') => {
    const barrierValue = +contract[barrierEntryName];
    if (!barrierValue) {
        return lastTick;
    }
    if (contract.barrierType !== 'relative') {
        return barrierValue;
    }
    if (typeof contract.entry_spot === 'undefined' && typeof lastTick === 'undefined') {
        throw new Error('Relative barrier can not be calculated');
    }
    return barrierValue + (+contract.entry_spot || lastTick);
};
