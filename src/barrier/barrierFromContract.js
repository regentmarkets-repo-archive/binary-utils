import type { ExtendedContract } from '../types';
import getAbsoluteBarrierFromContract from './getAbsoluteBarrierFromContract';

export default (contract: ExtendedContract, lastTickQuote: number): number =>
    getAbsoluteBarrierFromContract(contract, lastTickQuote, 'barrier');
