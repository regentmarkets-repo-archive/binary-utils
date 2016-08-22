const getVal = (getter: (x: any) => any = (x: any): any => x, arr: any[], i: number): number =>
    arr[i] ? getter(arr[i]) : Number.MAX_VALUE;

export default (arr1: any[], arr2: any[], getter1: (x: any) => any, getter2: (x: any) => any): any[] => {
    let i1 = 0;
    let i2 = 0;
    const result = [];
    while (i1 < arr1.length || i2 < arr2.length) {
        const val1 = getVal(getter1, arr1, i1);
        const val2 = getVal(getter2, arr2, i2);
        if (val1 < val2) {
            result.push(arr1[i1]);
            i1++;
        } else if (val1 > val2) {
            result.push(arr2[i2]);
            i2++;
        } else {
            result.push(arr1[i1]);
            i1++;
            i2++;
        }
    }
    return result;
};
