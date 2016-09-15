export default (arr1: any[], arr2: any[], eq: Comparator = (a, b) => a === b): boolean => {
    const len1 = arr1.length;
    const len2 = arr2.length;
    const lengthDiff = Math.abs(len1 - len2);

    switch (lengthDiff) {
        case 0:
            if (len1 === 0) return false;
            if (len1 === 1) return !eq(arr1[0], arr2[0]);

            return eq(arr1[arr1.length - 1], arr2[arr2.length - 2])
                || eq(arr1[arr1.length - 2], arr2[arr2.length - 1]);

        case 1:
            if (len1 === 0 || len2 === 0) return true;

            return eq(arr1[arr1.length - 1], arr2[arr2.length - 2])
                || eq(arr1[arr1.length - 2], arr2[arr2.length - 1]);

        default:
            return false;
    }
};
