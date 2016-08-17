import type { Contract } from '../types';
import commonRelativeBarrier from './commonRelativeBarrier';

export default (contract: Contract, lastTickQuote: number): number =>
    commonRelativeBarrier(contract.barrier, contract.entry_spot, lastTickQuote);
