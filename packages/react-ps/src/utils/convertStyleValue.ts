export function convertStyleValue(v: any): any {
    if (!v) return v;
    if ('string' !== typeof v) return v;
    if (!/^[0-9.]+rem$/.test(v)) return v;
    return `${parseFloat(v.replace(/rem$/, '')) * 16}px`;
}
