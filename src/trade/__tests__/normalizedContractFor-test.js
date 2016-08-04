import { expect } from 'chai';
import mockedContract from 'binary-test-data/contractsForGDAXI';
import normalizedContractFor from '../normalizedContractFor';

describe('normalizedContractFor', () => {
    it('accept a list ', () => {
        expect(normalizedContractFor([])).to.not.throw;
    });

    it('when called with empty list as input, returns empty list', () => {
        const normalized = normalizedContractFor([]);
        expect(normalized).to.deep.equal({});
    });

    it(`
        should return a tree like object with hierarchy as follow
        -> category
           -> type
              -> [{...}]
    `, () => {
        const normalized = normalizedContractFor(mockedContract);
        expect(normalized).to.contains.keys(['callput', 'touchnotouch']);
        expect(normalized.callput).to.contains.keys(['CALL', 'PUT']);
        expect(normalized.callput.CALL).to.have.lengthOf(4);
    });
});
