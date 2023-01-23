export function buildTypeMap(types: any) {
    return Object.entries(types).reduce((acc, [k, v]: [string, any]) => {
        acc[v.plural || `${k}s`] = { name: k, ...v };
        if (v && v.types) {
            acc = Object.entries(v.types).reduce((acc2, [kk, vv]: [string, any]) => {
                if (vv.list) {
                    acc2[`${k}__${vv.plural || `${kk}s`}`] = { name: kk, ...vv };
                }
                return acc2;
            }, acc);
        }
        return acc;
    }, {} as any);
}

export default buildTypeMap;
