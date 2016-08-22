export default (a: any[], b: any[]): boolean => {
    if (a.length !== b.length) {
        return false;
    }

    return !(a.some((x: any, idx: number): any => x !== b[idx]));
};
