import { expect } from 'chai';
import contractCategoryToText from '../contractCategoryToText';

describe('contractCategoryToText', () => {
    it('converts a contract code to text', () => {
        expect(contractCategoryToText('callput')).to.equal('Up/Down');
    });
});
