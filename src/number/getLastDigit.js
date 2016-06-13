export default (value, pips) =>
    +value.toFixed(pips).slice(-1);
