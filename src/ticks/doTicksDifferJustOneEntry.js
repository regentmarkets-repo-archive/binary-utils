import doTicksEqual from './doTicksEqual';

export default (ticks1, ticks2) => {
    const len1 = ticks1.length;
    const len2 = ticks2.length;
    const lengthDiff = Math.abs(len1 - len2);

    // case of 2 empty array
    if (lengthDiff === 0 && len1 === 0) {
        return false;
    }

    // case of [] vs [1]
    if (lengthDiff === 1 && (len1 === 0 || len2 === 0)) {
        return true;
    }

    if (lengthDiff > 1) {
        return false;
    }

    return doTicksEqual(ticks1[ticks1.length - 1], ticks2[ticks2.length - 2])
        || doTicksEqual(ticks1[ticks1.length - 2], ticks2[ticks2.length - 1]);
};
