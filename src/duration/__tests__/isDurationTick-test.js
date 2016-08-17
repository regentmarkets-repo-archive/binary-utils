import { expect } from 'chai';
import isDurationTick from '../isDurationTick';

describe('isDurationTick', () => {
    it('should return false when duration is undefined', () => {
        expect(isDurationTick()).to.be.false;
    });

     it('should return false where duration is not tick', () => {
        expect(isDurationTick('s')).to.be.false;
    });

     it('should return true where duration is tick', () => {
        expect(isDurationTick('t')).to.be.true;
    });
});
