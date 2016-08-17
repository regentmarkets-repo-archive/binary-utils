export default (arr1: any[], arr2: any[]): boolean =>
    arr1.length === arr2.length &&
        arr1.every((x, idx) => x === arr2[idx]);
