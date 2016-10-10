import typeHasBarrier from '../typeHasBarrier';

describe('typeHasBarrier', () => {
    it('detects when a type has no barriers', () => {
        const hasBarrier = typeHasBarrier('CALL');
        expect(hasBarrier).toBeFalsy();
    });

    it('detects when a type has barriers', () => {
        const hasBarrier = typeHasBarrier('DIGITMATCH');
        expect(hasBarrier).toBeTruthy();
    });

    it('non existing type has no barriers', () => {
        const hasBarrier = typeHasBarrier('NOTEXISTING');
        expect(hasBarrier).toBeFalsy();
    });
});
