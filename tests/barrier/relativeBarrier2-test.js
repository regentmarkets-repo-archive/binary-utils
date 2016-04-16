import { expect } from 'chai';
import relativeBarrier2 from '../../src/barrier/relativeBarrier2';

describe('relativeBarrier2', () => {
    it('calculates 2nd relative barrier', () => {
        const contract = {
            barrier: 5,
            barrier2: 20,
        };
        const barrier = relativeBarrier2(contract, 20);
        expect(barrier).to.equal(40);
    });
});
