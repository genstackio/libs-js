export function objectProperty(o: any, k: string | undefined) {
    if (!o || !k) return undefined;
    const [first, ...others] = k.split(/\./g);
    if (!others.length) return o[first] || undefined;
    return objectProperty(o[first], others.join('.'));
}

export default objectProperty;
