import getLastDigit from './getLastDigit';

export default (ticks: Tick[], pips: number): number[] =>
    ticks.reduce((acc: number[], x: Tick) => {
        const digit = getLastDigit(x.quote, pips);
        acc[digit]++;
        return acc;
    }, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    .map(x => ticks.length && x / ticks.length * 100);
