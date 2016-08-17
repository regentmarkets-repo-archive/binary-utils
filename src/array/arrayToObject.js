export default (arr: any[]): any =>
    arr.reduce((obj: any, x: any) => {
        Object.keys(x).forEach(key => {
            if (Array.isArray(obj[key])) {
                obj[key].push(x[key]);
            } else {
                obj[key] = [x[key]];
            }
        });
        return obj;
    }, {});
