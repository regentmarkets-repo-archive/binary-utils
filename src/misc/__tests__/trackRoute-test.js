import sinon from 'sinon';
import { trackRoute } from '../Analytics';

describe('trackRoute', () => {
    it('calls GA and send a pagewview with param', () => {
        const ga = sinon.spy();
        trackRoute('/hello', ga);
        expect(ga.calledWith('send', 'pageview', '/hello')).toBeTruthy();
    });
});
