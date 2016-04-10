import { expect } from 'chai';
import numberToSignedString from '../src/numberToSignedString';

describe('numberToSignedString', () => {
    it('Convert Number to a Signed string', () => {
        expect(numberToSignedString(4567)).to.equal('+4567');
    });
});
