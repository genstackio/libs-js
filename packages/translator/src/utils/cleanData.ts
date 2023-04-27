export function cleanData(b: any, a: any) {
    if (!b) return b;
    if ('string' === typeof b) return b;
    if ('boolean' === typeof b) return b;
    if (Array.isArray(b)) return b;
    if ('object' === typeof b)
        return Object.entries(b).reduce((acc, [k, v]) => {
            if (a && a[k]) acc[k] = cleanData(v, a[k]);
            return acc;
        }, {});
    return b;
}

export default cleanData;
