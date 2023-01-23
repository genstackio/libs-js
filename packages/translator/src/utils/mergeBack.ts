export function mergeBack(a: any, b: any) {
    if (!!a && 'object' !== typeof a) return a;
    if (!b || 'object' !== typeof b) {
        if ('undefined' === typeof a) return b;
        return a;
    }
    if (Array.isArray(b)) {
        if (!Array.isArray(a)) return b;
        b.forEach((bb: any, ii: number) => {
            if ('undefined' === typeof a[ii]) a[ii] = bb;
            else a[ii] = mergeBack(a[ii], bb);
        });
        return a;
    }
    return Object.entries(b).reduce((acc, [k, v]) => {
        acc[k] = mergeBack(acc[k], v);
        return acc;
    }, a);
}
