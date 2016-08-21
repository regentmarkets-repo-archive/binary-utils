export default (barrier: ?number, entrySpot: ?number, lastTickQuote: number) =>
    +barrier + (+entrySpot || lastTickQuote);
