import { expect } from 'chai';
import calculateLastDigitStats from '../calculateLastDigitStats';

describe('calculateLastDigitStats', () => {
    it('empty array results in 0s', () => {
        const input = [];
        const result = calculateLastDigitStats(input);
        expect(result).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });

    it('empty array results in 0s', () => {
        const input = [{ quote: 123 }];
        const result = calculateLastDigitStats(input);
        expect(result).to.deep.equal([0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
    });

    it('works correctly', () => {
        const input = [
            { quote: 10 },
            { quote: 55 },
            { quote: 3 },
        ];
        const result = calculateLastDigitStats(input);
        expect(result).to.deep.equal([1, 0, 0, 1, 0, 1, 0, 0, 0, 0]);
    });

    it('works with non z array results in 0s', () => {
        const input = [
            { quote: 1.23 },
            { quote: 5.43 },
            { quote: 12.345 },
        ];
        const result = calculateLastDigitStats(input, 2);
        expect(result).to.deep.equal([0, 0, 0, 2, 0, 1, 0, 0, 0, 0]);
    });
});
