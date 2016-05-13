import { expect } from 'chai';
import contractTimeCodeToText from '../contractTimeCodeToText';

describe('contractTimeCodeToText', () => {
    it('converts a contract code to text', () => {
        expect(contractTimeCodeToText('date_start')).to.equal('Start Time');
    });
});
