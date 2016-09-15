import { expect } from 'chai';
import doArrayDifferJustOneEntry from '../doArrayDifferJustOneEntry';

describe('doArrayDifferJustOneEntry', () => {
    it('two empty array do not differ by one', () => {
        const arr1 = [];
        const arr2 = [];
        const result = doArrayDifferJustOneEntry(arr1, arr2);
        expect(result).to.be.false;
    });

    it('one empty lists and a list of one item do differ one candle', () => {
        const arr1 = [];
        const arr2 = [123];
        const result = doArrayDifferJustOneEntry(arr1, arr2);
        expect(result).to.be.true;
    });

    it('2 arrs with 1 same element should not differ by one', () => {
        const a1 = [{ epoch: 1 }];
        const a2 = [{ epoch: 1 }];

        expect(doArrayDifferJustOneEntry(a1, a2, (a, b) => a.epoch === b.epoch)).to.be.false;
    });

    it('2 arrs with length 1 but diff element should differ by one', () => {
        const a1 = [{ epoch: 2 }];
        const a2 = [{ epoch: 1 }];

        expect(doArrayDifferJustOneEntry(a1, a2, (a, b) => a.epoch === b.epoch)).to.be.true;
    });

    it('a list that differs more than one item length do not differ by one', () => {
        const arr1 = [{ epoch: 1 }];
        const arr2 = [{ epoch: 1 }, { epoch: 2 }, { epoch: 3 }];
        const result = doArrayDifferJustOneEntry(arr1, arr2);
        expect(result).to.be.false;
    });

    it('lists that differ one item and content is offset by one, do differ by one', () => {
        const arr1 = [1, 2];
        const arr2 = [1, 2, 3];
        const result = doArrayDifferJustOneEntry(arr1, arr2);
        expect(result).to.be.true;
    });

    it('lists that differ one item but content is not offset by one, do not differ one candle', () => {
        const arr1 = [2, 1];
        const arr2 = [1, 2, 3];
        const result = doArrayDifferJustOneEntry(arr1, arr2);
        expect(result).to.be.false;
    });

    it('lists that are the same length but have offseted values, do differ one candle', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [2, 3, 4];
        const result = doArrayDifferJustOneEntry(arr1, arr2);
        expect(result).to.be.true;
    });
});
