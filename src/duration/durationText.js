import type { DurationUnit } from '../types';

export default (unit: DurationUnit): string => ({
    t: 'Ticks',
    s: 'Seconds',
    m: 'Minutes',
    h: 'Hours',
    d: 'Days',
})[unit];
