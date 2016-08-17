import type { Contract } from '../types';
import relativeBarrier from './relativeBarrier';

export default (contract: Contract, lastTickQuote: number): number =>
    contract.barrier ?
        relativeBarrier(contract, lastTickQuote) :
        +contract.entry_spot || lastTickQuote;
