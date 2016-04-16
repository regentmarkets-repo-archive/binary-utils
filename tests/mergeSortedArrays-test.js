import { expect } from 'chai';
import mergeSortedArrays from '../src/mergeSortedArrays';

describe('mergeSortedArrays', () => {
    it('two empty arrays merge into an empty array', () => {
        expect(mergeSortedArrays([], [])).to.deep.equal([]);
    });

    it('an empty array and array with items equals the non empty array', () => {
        expect(mergeSortedArrays([], [1, 2, 3])).to.deep.equal([1, 2, 3]);
        expect(mergeSortedArrays([1, 2, 3], [])).to.deep.equal([1, 2, 3]);
    });

    it('two sorted arrays merge into a single sorted array', () => {
        expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('two unsorted arrays do not merge into a single sorted array', () => {
        expect(mergeSortedArrays([5, 3, 1], [2, 6, 4])).to.not.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('when merging if elements that are equal result into a single element', () => {
        expect(mergeSortedArrays([1, 2, 3, 4], [2, 3, 6])).to.deep.equal([1, 2, 3, 4, 6]);
    });

    it('can pass additional parameters for extracting data from objects to compare', () => {
        const arr1 = [
            { epoch: 1 },
            { epoch: 3 },
            { epoch: 5 },
        ];
        const arr2 = [
            { epoch: 2 },
            { epoch: 4 },
            { epoch: 6 },
        ];
        const expected = [
            { epoch: 1 },
            { epoch: 2 },
            { epoch: 3 },
            { epoch: 4 },
            { epoch: 5 },
            { epoch: 6 },
        ];
        expect(mergeSortedArrays(arr1, arr2, x1 => x1.epoch, x2 => x2.epoch)).to.deep.equal(expected);
    });
});
