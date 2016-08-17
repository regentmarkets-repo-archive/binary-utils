import type { ExtendedContract } from '../types';

export default (contract: ExtendedContract, lastTickQuote: number, barrierEntryName: string = 'barrier'): number => {
    const barrierValue = +contract[barrierEntryName];
    if (!barrierValue) {
        return lastTickQuote;
    }
    if (contract.barrierType !== 'relative') {
        return barrierValue;
    }
    if (typeof contract.entry_spot === 'undefined' && typeof lastTickQuote === 'undefined') {
        throw new Error('Relative barrier can not be calculated');
    }
    return barrierValue + (+contract.entry_spot || lastTickQuote);
};
