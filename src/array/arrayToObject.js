export default (arr: any[]): Object =>
    arr.reduce((obj: Object, x: any): Object => {
        Object.keys(x).forEach((key: any) => {
            if (Array.isArray(obj[key])) {
                obj[key].push(x[key]);
            } else {
                obj[key] = [x[key]];
            }
        });
        return obj;
    }, {});
