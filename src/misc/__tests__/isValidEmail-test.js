import isValidEmail from '../isValidEmail';

describe('isValidEmail', () => {
    it('returns false for invalid emails', () => {
        const isValid = isValidEmail('not really an email');
        expect(isValid).toBeFalsy();
    });

    it('returns true for valid emails', () => {
        const isValid = isValidEmail('email@example.com');
        expect(isValid).toBeTruthy();
    });

    it('is not strict', () => {
        const isValid = isValidEmail('a@a.a');
        expect(isValid).toBeTruthy();
    });
});
