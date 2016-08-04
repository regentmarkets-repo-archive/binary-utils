import nowAsEpoch from '../nowAsEpoch';
import { expect } from 'chai';

describe('nowAsEpoch', () => {
    it('should return the epoch equivalent of Now()', () =>{
        const theDate = new Date();
        const exptedEpoch = Math.floor(Date.now() / 1000);
        const givenEpoch = nowAsEpoch();
        expect(exptedEpoch).to.equal(givenEpoch);
    })
})