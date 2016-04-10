import { expect } from 'chai';
import tradeTypeTextToCode from '../src/tradeTypeTextToCode';

describe('tradeTypeTextToCode', () => {
    it('returns the code behind friendly name', () => {
        const code = tradeTypeTextToCode('Rise');
        expect(code).to.equal('CALL');
    });
});
