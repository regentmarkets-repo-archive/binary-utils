import pipsToDigits from '../pipsToDigits';

describe('pipsToDigits', () => {
    it('0.01 pips result in 2 digits after the decimal point', () => {
        const digits = pipsToDigits(0.01);
        expect(digits).toEqual(2);
    });

    it('0.0001 pips result in 4 digits after the decimal point', () => {
        const digits = pipsToDigits(0.0001);
        expect(digits).toEqual(4);
    });
});
