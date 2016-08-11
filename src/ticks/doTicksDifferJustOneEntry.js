import doTicksEqual from './doTicksEqual';
import doArrayDifferJustOneEntry from './doArrayDifferJustOneEntry';

export default (ticks1, ticks2) => doArrayDifferJustOneEntry(ticks1, ticks2, doTicksEqual);
