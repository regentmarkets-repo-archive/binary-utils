import commonRelativeBarrier from './commonRelativeBarrier';

export default (contract, lastTick) =>
    commonRelativeBarrier(contract.barrier, contract.entry_spot, lastTick);
