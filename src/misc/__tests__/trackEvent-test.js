import { expect } from 'chai';
import sinon from 'sinon';
import { trackEvent } from '../Analytics';

describe('trackEvent', () => {
    it('calls GA and sends an event', () => {
        const ga = sinon.spy();
        trackEvent('Video', 'play', 'cats.mp4', ga);
        expect(ga.calledWith('send', {
          hitType: 'event',
          eventCategory: 'Video',
          eventAction: 'play',
          eventLabel: 'cats.mp4',
      })).to.be.true;
    });
});
