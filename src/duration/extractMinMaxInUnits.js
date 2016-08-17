import type { DurationUnit } from '../types';
import durationUnits from './durationUnits';
import splitSecsToUnits from '../date/splitSecsToUnits';

// block is a structure that describes min and max of specific time unit
const blockIsValid = (minArg: number, maxArg: number, unit: DurationUnit): boolean => {
    if (maxArg <= 1) {
        return false;
    }
    switch (unit) {
        case 's': return minArg < 60;
        case 'm': return minArg < 60;
        case 'h': return minArg < 24;
        case 'd':
        default:
            return true;
    }
};

export default (minInSecs: number, maxInSecs: number): any[] => {
    const minInUnits = splitSecsToUnits(minInSecs);
    const maxInUnits = splitSecsToUnits(maxInSecs);

    const durations: any[] = [];
    for (let i = 0; i < minInUnits.length; i++) {
        const unit = durationUnits[i + 1];
        const minI = minInUnits[i];
        const maxI = maxInUnits[i];
        if (blockIsValid(minI, maxI, unit)) {
            durations.push({
                unit,
                min: minI > 0 ? minI : 1,
                max: maxI });
        }
    }
    return durations;
};
