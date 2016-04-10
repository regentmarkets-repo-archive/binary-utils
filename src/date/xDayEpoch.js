export default x => {
    const secsAway = x * 60 * 60 * 24;
    return Math.floor(Date.now() / 1000) + secsAway;
};
