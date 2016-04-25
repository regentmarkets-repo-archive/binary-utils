export default (arr1, arr2, getter1, getter2) => {
    let i1 = 0;
    let i2 = 0;
    let result = [];
    while (i1 < arr1.length || i2 < arr2.length) {
        const val1 = arr1[i1] ? (getter1 ? getter1(arr1[i1]) : arr1[i1]) : Number.MAX_VALUE;
        const val2 = arr2[i2] ? (getter2 ? getter2(arr2[i2]) : arr2[i2]) : Number.MAX_VALUE;
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
