export function convertValueToTranslatableItems(v: any, k: string, acc: any) {
    switch (typeof v) {
        case 'string':
            acc.push({text: v, path: k});
            return acc;
        case 'number':
            acc.push({text: String(v), path: k});
            return acc;
        case 'boolean':
            acc.push({text: v ? 'true' : 'false', path: k});
            return acc;
        case 'undefined':
            acc.push({text: '', path: k});
            return acc;
        case 'object':
            if (Array.isArray(v)) {
                v.forEach((vv: any, index: number) => {
                    acc = convertValueToTranslatableItems(vv, `${k}|||${index}`, acc);
                });
                return acc;
            } else {
                return Object.entries(v as Record<string, any>).reduce((acc2, [kk, vv]: [string, string]) => {
                    return convertValueToTranslatableItems(vv, `${k}|||${kk}`, acc2);
                }, acc) as any;
            }
        default:
            // ignore
            break;
    }
}

export default convertValueToTranslatableItems;
