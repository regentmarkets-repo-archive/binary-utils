import type { DurationUnit } from '../types';
import durationToSecs from './durationToSecs';

export default (duration: string): number => {
    const d: number = +duration.slice(0, -1);
    const u: DurationUnit = duration.slice(-1);
    return durationToSecs(d, u);
};
