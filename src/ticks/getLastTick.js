import type { Tick } from '../types';

export default (ticks: Tick[]): ?Tick =>
    ticks && (ticks.length === 0 ? undefined : ticks[ticks.length - 1]);
