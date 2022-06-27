export function filterObject(o: object) {
    return Object.entries(o).reduce((acc, [k, v]: [string, any]) => {
        if ('_' === k.slice(0, 1)) return acc;
        acc[k] = v;
        return acc;
    }, {} as any);
}

export default filterObject;
