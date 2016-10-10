import testTicks from 'binary-test-data/ticks';
import calculateLastDigitStats from '../calculateLastDigitStats';

describe('calculateLastDigitStats', () => {
    it('empty array results in 0s', () => {
        const input = [];
        const result = calculateLastDigitStats(input);
        expect(result).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });

    it('empty array results in 0s', () => {
        const input = [{ quote: 123 }];
        const result = calculateLastDigitStats(input);
        expect(result).toEqual([0, 0, 0, 100, 0, 0, 0, 0, 0, 0]);
    });

    it('the sum of all percentage should be 100%', () => {
        const result = calculateLastDigitStats(testTicks, 2);
        const sum = result.reduce((a, b) => a + b);

        expect(sum).toEqual(100);
    });

    it('works correctly', () => {
        const input = [
            { quote: 10 },
            { quote: 55 },
            { quote: 3 },
            { quote: 777 },
        ];
        const result = calculateLastDigitStats(input);
        expect(result).toEqual([25, 0, 0, 25, 0, 25, 0, 25, 0, 0]);
    });

    it('works with non zero pip size', () => {
        const input = [
            { quote: 1.23 },
            { quote: 5.43 },
            { quote: 5.43 },
            { quote: 12.345 },
        ];
        const result = calculateLastDigitStats(input, 2);
        expect(result).toEqual([0, 0, 0, 75, 0, 25, 0, 0, 0, 0]);
    });
});
