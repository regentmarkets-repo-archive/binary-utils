import commonRelativeBarrier from './commonRelativeBarrier';

export default (contract: Contract, lastTickQuote: number): number =>
    commonRelativeBarrier(contract.barrier2, contract.entry_spot, lastTickQuote);
