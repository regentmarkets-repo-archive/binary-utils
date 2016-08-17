import type { Tick, ChartTick } from '../types';

export default (tick: Tick): ChartTick => [
    tick.epoch * 1000,
    tick.quote,
];
