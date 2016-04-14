import relativeBarrier from './relativeBarrier';

export default (contract, lastTick) =>
    contract.barrier ?
        relativeBarrier(contract, lastTick) :
        +contract.entry_spot || lastTick;
