import type { Tick } from '../types';
import doTicksEqual from './doTicksEqual';
import doArrayDifferJustOneEntry from './doArrayDifferJustOneEntry';

export default (ticks1: Tick, ticks2: Tick): boolean =>
    doArrayDifferJustOneEntry(ticks1, ticks2, doTicksEqual);
