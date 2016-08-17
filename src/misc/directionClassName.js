export default (value: number): string =>
    (value < 0 && 'number-negative') || (value > 0 && 'number-positive') || '';
