import dateToDateString from '../dateToDateString';

describe('dateToDateString', () => {
    it('converts first day of the year', () => {
        const str = dateToDateString(new Date(2000, 0, 1));
        expect(str).toEqual('2000-01-01');
    });

    it('converts last day of the year', () => {
        const str = dateToDateString(new Date(1999, 11, 31));
        expect(str).toEqual('1999-12-31');
    });
});
