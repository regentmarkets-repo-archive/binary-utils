import { expect } from 'chai';
import sinon from 'sinon';
import { trackUserId } from '../Analytics';

describe('trackUserId', () => {
    it('calls GA and sets userId to param', () => {
        const ga = sinon.spy();
        trackUserId(123, ga);
        expect(ga.calledWith('set', 'userId', 123)).to.be.true;
    });
});
