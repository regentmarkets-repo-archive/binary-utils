import commonRelativeBarrier from './commonRelativeBarrier';

export default (contract, lastSpot) =>
    commonRelativeBarrier(contract.barrier2, contract.entry_spot, lastSpot);
