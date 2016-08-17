import type { Tick } from '../types';

export default (ticks: Tick[]): ?number =>
    (ticks && ticks.length > 0) ? ticks[ticks.length - 1].quote : undefined;
