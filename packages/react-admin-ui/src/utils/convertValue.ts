export function convertValue(v: any) {
    if (!v) return undefined;
    if (v && v.available) return v.content;
    return undefined;
}

export default convertValue;
