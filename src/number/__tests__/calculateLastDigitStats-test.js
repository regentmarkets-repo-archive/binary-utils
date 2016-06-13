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
        expect(result).to.deep.equal([0, 0, 0, 100, 0, 0, 0, 0, 0, 0]);
    });

    it('works correctly', () => {
        const input = [
            { quote: 10 },
            { quote: 55 },
            { quote: 3 },
            { quote: 777 },
        ];
        const result = calculateLastDigitStats(input);
        expect(result).to.deep.equal([25, 0, 0, 25, 0, 25, 0, 25, 0, 0]);
    });

    it('works with non zero pip size', () => {
        const input = [
            { quote: 1.23 },
            { quote: 5.43 },
            { quote: 5.43 },
            { quote: 12.345 },
        ];
        const result = calculateLastDigitStats(input, 2);
        expect(result).to.deep.equal([0, 0, 0, 75, 0, 25, 0, 0, 0, 0]);
    });
});
