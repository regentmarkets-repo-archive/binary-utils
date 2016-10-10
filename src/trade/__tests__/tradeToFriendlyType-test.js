import tradeToFriendlyType from '../tradeToFriendlyType';

describe('tradeToFriendlyType', () => {
    it('simply returns friendly name when no barrier', () => {
        const typeStr = tradeToFriendlyType('CALL');
        expect(typeStr).toEqual('Rise');
    });

    it('returns friendly name including a barrier when existing', () => {
        const typeStr = tradeToFriendlyType('DIGITMATCH', 5);
        expect(typeStr).toEqual('Digit Match 5');
    });
});
