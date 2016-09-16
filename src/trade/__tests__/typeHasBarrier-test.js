import { expect } from 'chai';
import typeHasBarrier from '../typeHasBarrier';

describe('typeHasBarrier', () => {
    it('detects when a type has no barriers', () => {
        const hasBarrier = typeHasBarrier('CALL');
        expect(hasBarrier).to.be.false;
    });

    it('detects when a type has barriers', () => {
        const hasBarrier = typeHasBarrier('DIGITMATCH');
        expect(hasBarrier).to.be.true;
    });

    it('non existing type has no barriers', () => {
        const hasBarrier = typeHasBarrier('NOTEXISTING');
        expect(hasBarrier).to.be.false;
    });
});
