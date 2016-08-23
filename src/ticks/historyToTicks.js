// a zip + map, but I do not find we need it much, so no need to generalize
export default (history: any): Tick[] =>
    history.times.map((t, idx) => ({
        epoch: +t,
        quote: +history.prices[idx],
    }));
