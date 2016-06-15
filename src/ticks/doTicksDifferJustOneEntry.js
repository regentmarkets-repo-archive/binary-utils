import doTicksEqual from './doTicksEqual';

export default (ticks1, ticks2) => {
    const lengthDiff = Math.abs(ticks1.length - ticks2.length);

    if (lengthDiff !== 1) {
        return false;
    }

    return doTicksEqual(ticks1[ticks1.length - 1], ticks2[ticks2.length - 2])
        || doTicksEqual(ticks1[ticks1.length - 2], ticks2[ticks2.length - 1]);
};
