export const toPlainJS = (obj: any): any =>
    obj && (typeof obj.toJS === 'undefined' ? obj : obj.toJS());

export default (obj: any): any =>
    obj && Object.keys(obj).reduce((acc, key) => {
        acc[key] = toPlainJS(obj[key]);
        return acc;
    }, {});
