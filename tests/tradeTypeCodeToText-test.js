import { expect } from 'chai';
import tradeTypeCodeToText from '../src/tradeTypeCodeToText';

describe('tradeTypeCodeToText', () => {
    it('returns friendly name from code', () => {
        const typeStr = tradeTypeCodeToText('CALL');
        expect(typeStr).to.equal('Rise');
    });
});
