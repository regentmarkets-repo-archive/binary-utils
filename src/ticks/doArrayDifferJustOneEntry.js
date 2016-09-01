export default (arr1: any[], arr2: any[], eq: Comparator = (a, b) => a === b): boolean => {
    const len1 = arr1.length;
    const len2 = arr2.length;
    const lengthDiff = Math.abs(len1 - len2);

    // case of 2 empty array
    if (lengthDiff === 0 && len1 === 0) {
        return false;
    }

    // case of [] vs [1]
    if (lengthDiff === 1 && (len1 === 0 || len2 === 0)) {
        return true;
    }

    if (lengthDiff > 1) {
        return false;
    }

    return eq(arr1[arr1.length - 1], arr2[arr2.length - 2])
        || eq(arr1[arr1.length - 2], arr2[arr2.length - 1]);
};
