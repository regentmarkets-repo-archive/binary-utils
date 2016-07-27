import { expect } from 'chai';
import numberToSignedString from '../numberToSignedString';

describe('numberToSignedString', () => {
    it('converts 0 directly to string', () => {
        expect(numberToSignedString(0)).to.equal('0');
    });

    it('negative numbers have a minus sign', () => {
        expect(numberToSignedString(-123)).to.equal('-123');
    });

    it('positive numbers have a plus sign', () => {
        expect(numberToSignedString(123)).to.equal('+123');
    });
});
