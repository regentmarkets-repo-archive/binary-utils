export default (a: string, b: string): boolean => {
    const aH = +a.slice(0, 2);
    const aM = +a.slice(3, 5);
    const aS = +a.slice(6);

    const bH = +b.slice(0, 2);
    const bM = +b.slice(3, 5);
    const bS = +b.slice(6);

    if (aH !== bH) {
        return aH > bH;
    } else if (aM !== bM) {
        return aM > bM;
    }
    return aS > bS;
};
