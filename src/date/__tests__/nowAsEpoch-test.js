import nowAsEpoch from '../nowAsEpoch';

describe('nowAsEpoch', () => {
    it('should return the epoch equivalent of Now()', () => {
        const exptedEpoch = Math.floor(Date.now() / 1000);
        const givenEpoch = nowAsEpoch();
        expect(exptedEpoch).toEqual(givenEpoch);
    });
});
