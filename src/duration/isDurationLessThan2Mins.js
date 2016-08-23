import isDurationTick from './isDurationTick';
import durationToSecs from './durationToSecs';

export default (duration: number, durationUnit: DurationUnit): boolean =>
    isDurationTick(durationUnit) || durationToSecs(duration, durationUnit) < 120;
