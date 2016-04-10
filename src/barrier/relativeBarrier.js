import commonRelativeBarrier from './commonRelativeBarrier';

export default (contract, lastSpot) =>
    commonRelativeBarrier(contract.barrier, contract.entry_spot, lastSpot);
