import contractsForR50 from 'binary-test-data/contractsForR50';
import extractDurationHelper from '../extractDurationHelper';
import normalizedContractFor from '../../trade/normalizedContractFor';

describe('extractDurationHelper', () => {
    const normalized = normalizedContractFor(contractsForR50);

    it('should return arrays of duration for non-spread type', () => {
        const durations = extractDurationHelper(normalized.risefall.CALL, 'CALL');
        expect(durations.length).toEqual(5);
    });
});
