import isValidPassword from '../isValidPassword';

describe('isValidPassword', () => {
    it('password with an upper case letter, number, and longer than 5 symbols is valid', () => {
        const isValid = isValidPassword('Password1');
        expect(isValid).toBeTruthy();
    });

    it('password shorter than 6 symbols is not valid', () => {
        const isValid = isValidPassword('Pwd12');
        expect(isValid).toBeFalsy();
    });
});
