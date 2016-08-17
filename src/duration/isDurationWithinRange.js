import type { DurationUnit, Range } from '../types';

export default (duration: number, durationUnit: DurationUnit, ranges: Range[]): boolean => {
    const relatedBlock = ranges.find(r => r.unit === durationUnit);

    if (!relatedBlock) {
        return false;
    }

    return duration <= relatedBlock.max && duration >= relatedBlock.min;
};
