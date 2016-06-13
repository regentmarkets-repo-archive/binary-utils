import getLastDigit from '../number/getLastDigit';

export default (ticks, pips) =>
    ticks.reduce((acc, x) => {
        const digit = getLastDigit(x.quote, pips);
        acc[digit]++;
        return acc;
    }, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
