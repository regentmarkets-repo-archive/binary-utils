export default (obj, predicate) =>
    Object.keys(obj).reduce((acc, key) => {
        if (predicate(obj[key])) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
