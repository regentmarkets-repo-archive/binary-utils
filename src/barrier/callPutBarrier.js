import type { ExtendedContract } from '../types';
import relativeBarrier from './relativeBarrier';

export default (contract: ExtendedContract, lastTickQuote: number): number =>
    contract.barrier ?
        relativeBarrier(contract, lastTickQuote) :
        +contract.entry_spot || lastTickQuote;
