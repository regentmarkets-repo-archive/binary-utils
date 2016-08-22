import commonRelativeBarrier from './commonRelativeBarrier';

export default (contract: ExtendedContract, lastTickQuote: number): number =>
    commonRelativeBarrier(contract.barrier, contract.entry_spot, lastTickQuote);
