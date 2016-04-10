import relativeBarrier from './relativeBarrier';

export default (contract, lastSpot) =>
    contract.barrier ?
        relativeBarrier(contract, lastSpot) :
        +contract.entry_spot || (lastSpot && lastSpot.quote);
