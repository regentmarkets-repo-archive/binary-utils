import toMoney from '../toMoney';

describe('toMoney', () => {
    it('formats a number to a string with two digits precision', () => {
        expect(toMoney(5)).toEqual('5.00');
        expect(toMoney(5.00)).toEqual('5.00');
        expect(toMoney(5.0000)).toEqual('5.00');
    });

    it('treats a string as number and formats it to a two digit precision string', () => {
        expect(toMoney('5')).toEqual('5.00');
        expect(toMoney('5.00')).toEqual('5.00');
        expect(toMoney('5.0000')).toEqual('5.00');
    });

    it('formats negative numbers correctly', () => {
        expect(toMoney(-5)).toEqual('-5.00');
        expect(toMoney('-5')).toEqual('-5.00');
    });
});
