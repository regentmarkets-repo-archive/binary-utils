import extractSpreadInfo from '../extractSpreadInfo';

describe('extractSpreadInfo', () => {
    it('gets spread information from raw data', () => {
        const spreadInfo = extractSpreadInfo([{
            amount_per_point: 123,
        }]);
        expect(spreadInfo.amountPerPoint).toEqual(123);
    });
});
