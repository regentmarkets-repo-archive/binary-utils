import commonRelativeBarrier from './commonRelativeBarrier';

export default (contract, lastTick) =>
    commonRelativeBarrier(contract.barrier2, contract.entry_spot, lastTick);
