import getLastDigit from '../getLastDigit';

describe('getLastDigit', () => {
    it('when no second parameter, pip is 0', () => {
        expect(getLastDigit(1)).toEqual(1);
        expect(getLastDigit(12)).toEqual(2);
        expect(getLastDigit(123)).toEqual(3);
        expect(getLastDigit(0.1)).toEqual(0);
        expect(getLastDigit(0.123)).toEqual(0);
    });

    it('when a parameter is provided, it is used to calculate last digit', () => {
        expect(getLastDigit(0.1, 1)).toEqual(1);
        expect(getLastDigit(0.12, 1)).toEqual(1);
        expect(getLastDigit(123, 1)).toEqual(0);
        expect(getLastDigit(123.45, 0)).toEqual(3);
        expect(getLastDigit(123.45, 5)).toEqual(0);
        expect(getLastDigit(0.123, 2)).toEqual(2);
        expect(getLastDigit(123.456, 3)).toEqual(6);
    });
});
