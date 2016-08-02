import { expect } from 'chai';
import isValidTime from '../isValidTime';

describe('isValidTime', () => {
    it('should return true when time is valid', () => {
        const validTime = isValidTime('24:59:12');
        expect(!validTime).to.be.true;
    });

    it('should return false when hours is greater than 24', () => {
        const validTime = isValidTime('25:59:12');
        expect(!validTime).to.be.false;
    });

    it('should return false when minutes is greater than 60', () => {
        const validTime = isValidTime('23:61:12');
        expect(!validTime).to.be.false;
    });

    it('should return false when minutes is equal to 60', () => {
        const validTime = isValidTime('23:60:12');
        expect(!validTime).to.be.false;
    });

    it('should return false when seconds is equal to 60', () => {
        const validTime = isValidTime('23:34:60');
        expect(!validTime).to.be.false;
    });

    it('should return false when seconds is greater than 60', () => {
        const validTime = isValidTime('23:34:66');
        expect(!validTime).to.be.false;
    });
});
