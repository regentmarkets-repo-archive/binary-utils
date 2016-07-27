import { expect } from 'chai';
import extractDurationHelper from '../extractDurationHelper';
import normalizedContractFor from '../../trade/normalizedContractFor';
import contractsForR50 from 'binary-test-data/contractsForR50';

describe('extractDurationHelper', () => {
    const normalized = normalizedContractFor(contractsForR50);
    it('should return empty array for spreads as spreads does not have duration', () => {
        const durationsForSpread = extractDurationHelper(normalized.spreads.SPREADU, 'SPREAD');
        expect(durationsForSpread).be.empty;
    });

    it('should return arrays of duration for non-spread type', () => {
        const durations = extractDurationHelper(normalized.callput.CALL, 'CALL');
        expect(durations).to.have.length(5);
    });
});
