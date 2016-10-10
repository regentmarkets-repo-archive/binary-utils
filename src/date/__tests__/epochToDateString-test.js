import epochToDateString from '../epochToDateString';

describe('epochToDateString', () => {
    it('should convert to string correctly', () => {
        const str = epochToDateString(1000000000);
        expect(str).toEqual('2001-09-09');
    });

    it('should return undefined on undefined as input', () => {
        const str = epochToDateString();
        expect(str).toEqual.undefined;
    });
});
