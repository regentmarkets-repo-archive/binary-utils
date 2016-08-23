import durationToSecs from '../duration/durationToSecs';

export default (duration: number, unit: DurationUnit): boolean =>
    durationToSecs(duration, unit) < 60 * 60 * 24;
