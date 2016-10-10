import tradeTypeCodeToText from '../tradeTypeCodeToText';

describe('tradeTypeCodeToText', () => {
    it('returns friendly name from code', () => {
        const typeStr = tradeTypeCodeToText('CALL');
        expect(typeStr).toEqual('Rise');
    });
});
