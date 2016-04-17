import { expect } from 'chai';
import sequence from '../src/sequence';

describe('sequence', () => {
    it('0 elements requested returns an empty array', () => {
        expect(sequence(0)).to.deep.equal([]);
    });

    it('1 element requested returns an array with one value of 1', () => {
        expect(sequence(1)).to.deep.equal([1]);
    });

    it('several element requested returns a sequential array', () => {
        expect(sequence(5)).to.deep.equal([1, 2, 3, 4, 5]);
    });
});
