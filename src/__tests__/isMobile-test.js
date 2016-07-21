import { expect } from 'chai';
import isMobile from '../isMobile';

describe('isMobile', () => {
    it('returns false when no window object exists', () => {
        expect(isMobile()).to.be.false;
    });
});
