import { expect } from 'chai';
import isDurationTick from '../isDurationTick';

describe('isDurationTick', () => {
    it('should return undefined where duration is undefined', () => {
        expect(isDurationTick()).to.equal(undefined);
    })

     it('should return false where duration is not tick', () => {
        expect(isDurationTick('s')).to.equal(false);
    })

     it('should return true where duration is tick', () => {
        expect(isDurationTick('t')).to.equal(true);
    })
});

