export default (obj: mixed, predicate: (value: any) => boolean): any =>
    Object.keys(obj).reduce((acc, key) => {
        if (predicate(obj[key])) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
