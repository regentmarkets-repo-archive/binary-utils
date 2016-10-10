import mockedContract from 'binary-test-data/contractsForGDAXI';
import normalizedContractFor from '../normalizedContractFor';

describe('normalizedContractFor', () => {
    it('accept a list ', () => {
        expect(() => normalizedContractFor([])).not.toThrow();
    });

    it('when called with empty list as input, returns empty list', () => {
        const normalized = normalizedContractFor([]);
        expect(normalized).toEqual({});
    });

    it(`should return a tree like object with hierarchy as follow
        -> category
           -> type
              -> [{...}]`, () => {
        const normalized = normalizedContractFor(mockedContract);
        expect(normalized.callput).toBeDefined();
        expect(normalized.touchnotouch).toBeDefined();
        expect(normalized.callput.CALL).toBeDefined();
        expect(normalized.callput.PUT).toBeDefined();
        expect(normalized.callput.CALL.length).toEqual(4);
    });
});
