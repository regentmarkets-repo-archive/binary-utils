import contractsForR50 from 'binary-test-data/contractsForR50';
import extractDurationHelper from '../extractDurationHelper';
import normalizedContractFor from '../../trade/normalizedContractFor';

describe('extractDurationHelper', () => {
    const normalized = normalizedContractFor(contractsForR50);

    // SPREAD is not in the mock contract
    it.skip('should return empty array for spreads as spreads does not have duration', () => {
        const durationsForSpread = extractDurationHelper(normalized.spreads.SPREADU, 'SPREAD');
        expect(durationsForSpread.length).toEqual(0);
    });

    it('should return arrays of duration for non-spread type', () => {
        const durations = extractDurationHelper(normalized.risefall.CALL, 'CALL');
        expect(durations.length).toEqual(5);
    });
});
