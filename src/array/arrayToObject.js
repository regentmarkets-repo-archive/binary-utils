export default arr =>
    arr.reduce((obj, x) => {
        Object.keys(x).forEach(key => {
            if (Array.isArray(obj[key])) {
                obj[key].push(x[key]);
            } else {
                obj[key] = [x[key]];
            }
        });
        return obj;
    }, {});
