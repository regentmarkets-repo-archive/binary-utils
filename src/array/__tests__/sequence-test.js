import sequence from '../sequence';

describe('sequence', () => {
    it('0 elements requested returns an empty array', () => {
        expect(sequence(0)).toEqual([]);
    });

    it('1 element requested returns an array with one value of 1', () => {
        expect(sequence(1)).toEqual([0]);
    });

    it('several element requested returns a sequential array', () => {
        expect(sequence(5)).toEqual([0, 1, 2, 3, 4]);
    });
});
