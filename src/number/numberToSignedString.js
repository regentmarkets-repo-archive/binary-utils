export default (n: number): string =>
    n > 0 ?
        '+' + n :
        n.toString();
