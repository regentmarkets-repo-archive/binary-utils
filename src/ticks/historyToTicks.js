export default history =>
    history.times.map((t, idx) => {
        const quote = history.prices[idx];
        return { epoch: +t, quote: +quote };
    });
