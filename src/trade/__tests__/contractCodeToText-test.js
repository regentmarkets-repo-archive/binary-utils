import contractCodeToText from '../contractCodeToText';

describe('contractCodeToText', () => {
    it('converts a contract code to text', () => {
        expect(contractCodeToText('date_start')).toEqual('Start Time');
    });
});
