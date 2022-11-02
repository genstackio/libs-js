import replaceVars from "./replaceVars";

export function applyContext(a: any, b: any) {
    if (!a || !b) return a;
    if (Array.isArray(a)) {
        return a.map(x => applyContext(x, b));
    }
    if ('object' === typeof a) {
        return Object.entries(a).reduce((acc, [k, v]) => {
            acc[applyContext(k, b)] = applyContext(v, b);
            return acc;
        }, {} as any);
    }
    if ('string' !== typeof a) return a;
    return replaceVars(a, b);
}

export default applyContext;
