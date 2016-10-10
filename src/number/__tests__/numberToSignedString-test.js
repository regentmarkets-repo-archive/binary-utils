import numberToSignedString from '../numberToSignedString';

describe('numberToSignedString', () => {
    it('converts 0 directly to string', () => {
        expect(numberToSignedString(0)).toEqual('0');
    });

    it('negative numbers have a minus sign', () => {
        expect(numberToSignedString(-123)).toEqual('-123');
    });

    it('positive numbers have a plus sign', () => {
        expect(numberToSignedString(123)).toEqual('+123');
    });
});
