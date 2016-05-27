import { expect } from 'chai';
import isDateValid from '../isDateValid';

describe('isDateValid', () => {
    it('should return true if date valid', () => {
        const validDate = new Date();
        expect(isDateValid(validDate)).to.be.true;
    });

    it('should return false if date invalid', () => {
        const validDate = new Date('halo');
        expect(isDateValid(validDate)).to.be.false;
    });
});
