import { expect } from 'chai';
import getAbsoluteBarrierFromContract from '../getAbsoluteBarrierFromContract';

describe('getAbsoluteBarrierFromContract', () => {
    it('when no barrier, lastTick is provided', () => {
        const contract = {};
        const value = getAbsoluteBarrierFromContract(contract, 123);
        expect(value).to.equal(123);
    });

    it('when barrierType is not provided, absolute is default', () => {
        const contract = { barrier: 20 };
        const value = getAbsoluteBarrierFromContract(contract,  50);
        expect(value).to.equal(20);
    });

    it('when barrier is absolute, return barrier value directly', () => {
        const contract = { barrier: 100, barrierType: 'absolute' };
        const value = getAbsoluteBarrierFromContract(contract);
        expect(value).to.equal(100);
    });

    it('when barrier is relative, return barrier with offset from last tick', () => {
        const contract = { barrier: 20, barrierType: 'relative' };
        const value = getAbsoluteBarrierFromContract(contract, 50);
        expect(value).to.equal(70);
    });

    it('when barrier is relative, and there is entry_spot set, barrier is calculated against it', () => {
        const contract = { barrier: 20, entry_spot: 100, barrierType: 'relative' };
        const value = getAbsoluteBarrierFromContract(contract, 50);
        expect(value).to.equal(120);
    });

    it('can pass third parameter to get second barrier', () => {
        const contract = { barrier2: 20, entry_spot: 100, barrierType: 'relative' };
        const value = getAbsoluteBarrierFromContract(contract, 50, 'barrier2');
        expect(value).to.equal(120);
    });

    it('when relative barrier is calculated, entry_spot or lastTick is needed', () => {
        const contract = { barrier: 20, barrierType: 'relative' };
        expect(() => getAbsoluteBarrierFromContract(contract)).to.throw();
    });
});
