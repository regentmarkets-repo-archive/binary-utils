export default (barrier, entrySpot, lastSpot) =>
    +barrier + (+entrySpot || (lastSpot && lastSpot.quote));
