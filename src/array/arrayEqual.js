export default (a: any[], b: any[]): boolean => {
    if (a.length !== b.length) {
        return false;
    }

    return !(a.some((x, idx) => x !== b[idx]));
};
