export default (arr, key) =>
    arr.reduce((a, b) => {
        const kv = b[key];
        const idx = a.findIndex(g => g.some(e => e[key] === kv));

        if (idx > -1) {
            a[idx].push(b);
        } else {
            a.push([b]);
        }
        return a;
    }, []);
