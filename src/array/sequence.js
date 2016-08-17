export default (n: number): number[] =>
    (Array.apply(0, Array(n))).map((x, i) => i);
