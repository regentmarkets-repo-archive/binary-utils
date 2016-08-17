export default (arr: any[], key: string): any[] => {
    const result = {};
    arr.forEach(ele => {
        const kv = ele[key];
        if (!result[kv]) {
            result[kv] = [];
        }
        result[kv].push(ele);
    });
    return result;
};
