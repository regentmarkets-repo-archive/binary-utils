export default (barrier, entrySpot, lastTick) =>
    +barrier + (+entrySpot || lastTick);
