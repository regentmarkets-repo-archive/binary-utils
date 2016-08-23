type Getter = (x: any) => any;

export default (arr1: any[], arr2: any[],
                getter1: Getter = x => x, getter2: Getter = x => x,
                deduplication: boolean = true) => {
    /**
     * compare element using getter
     * @param a
     * @param b
     * @returns {number}
     *   0  -> equal
     *   1  -> `a` bigger than `b`
     *   -1 -> `b` bigger than `a`
     */
    const compare = (a, b) => {
        const valA = getter1(a);
        const valB = getter2(b);

        if (valA > valB) {
            return 1;
        }

        if (valA < valB) {
            return -1;
        }

        return 0;
    };

    // clone so that does not change arguments
    const a1Clone = arr1.slice(0);
    const a2Clone = arr2.slice(0);

    let result = [];

    // loop until both array is empty
    while (a1Clone.length > 0 || a2Clone.length > 0) {
        const a1Head = a1Clone[0];
        const a2Head = a2Clone[0];

        if (!a1Head) {
            result = result.concat(a2Clone);
            break;                      // break if one of the array is empty
        }

        if (!a2Head) {
            result = result.concat(a1Clone);
            break;                      // break if one of the array is empty
        }

        const last = result.length > 0 && result[result.length - 1];
        let toAdd;
        switch (compare(a1Head, a2Head)) {
            case 0: {
                if (deduplication) a2Clone.shift();
                toAdd = a1Clone.shift();
                break;
            }
            // a2Head is smaller
            case 1: {
                toAdd = a2Clone.shift();
                break;
            }
            // a1Head is smaller
            case -1: {
                toAdd = a1Clone.shift();
                break;
            }
            default:                // impossible
        }

        // if dedup is true, do not append same element
        if (deduplication && last && getter1(last) === getter2(toAdd)) {
            break;
        }
        result.push(toAdd);
    }

    return result;
};
