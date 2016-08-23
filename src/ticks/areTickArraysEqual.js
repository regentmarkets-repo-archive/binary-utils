export default (ticks1: Tick[], ticks2: Tick[]): boolean =>
    ticks1.length === ticks2.length &&
        (ticks1.length === 0 || ticks1[ticks1.length - 1].epoch === ticks2[ticks2.length - 1].epoch);
