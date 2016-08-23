export default (barrier: ?number, entrySpot: ?number, lastTickQuote: number): number =>
    +barrier + (+entrySpot || lastTickQuote);
