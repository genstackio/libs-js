export function convertValue(v: any) {
    if (null === v || undefined === v) return undefined;
    if (v && 'object' === typeof v && v.available) {
        return v.content;
    }
    if ('string' === typeof v) return v;
    if ('boolean' === typeof v) return v;
    return undefined;
}

export default convertValue;
