import { expect } from 'chai';
import askPriceFromProposal from '../askPriceFromProposal';

describe('askPriceFromProposal', () => {
    it('gets the ask price as number', () => {
        const proposal = {
            ask_price: '123',
        };
        const price = askPriceFromProposal(proposal);
        expect(price).to.equal(123);
    });
});
