import type { DurationUnit, Range } from '../types';

export default (duration: number, durationUnit: DurationUnit, range: Range): boolean => {
    const relatedBlock = range.find(r => r.unit === durationUnit);

    if (!relatedBlock) {
        return false;
    }

    return duration <= relatedBlock.max && duration >= relatedBlock.min;
};
