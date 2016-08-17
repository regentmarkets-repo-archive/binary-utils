// it's basically a zip + map, but I do not find we need it much, so no need to generalize
export default history =>
    history.times.map((t, idx) => {
        const quote = history.prices[idx];
        return { epoch: +t, quote: +quote };
    });
