import { expect } from 'chai';
import isIntraday from '../isIntraday';

describe('isIntraday', () => {
    it('is intraday', () => {
        expect(isIntraday(1, 't')).to.be.true;
        expect(isIntraday(1, 's')).to.be.true;
        expect(isIntraday(1, 'm')).to.be.true;
        expect(isIntraday(1, 'h')).to.be.true;
        expect(isIntraday(23, 'h')).to.be.true;
    });

    it('not intraday', () => {
        expect(isIntraday(1, 'd')).to.be.false;
        expect(isIntraday(100, 'd')).to.be.false;
        expect(isIntraday(30, 'h')).to.be.false;
    });
});
