import barrier2FromContract from '../barrier2FromContract';

describe('barrier2FromContract', () => {
    it('extracts first barrier from contract', () => {
        const contract = { barrier2: 100, barrierType: 'absolute' };
        const value = barrier2FromContract(contract);
        expect(value).toEqual(100);
    });
});
