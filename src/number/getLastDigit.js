export default (value: number, pips: number): number =>
    +value.toFixed(pips).slice(-1);
