export default (contract, lastTick) => {
    const barrierValue = +contract.barrier; // or barrier2;
    if (!barrierValue) {
        return lastTick;
    }
    if (contract.barrierType === 'absolute') {
        return barrierValue;
    }
    return barrierValue + (+contract.entry_spot || lastTick);
};
