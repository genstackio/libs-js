export function mergeContextObjects(a: any, b: any) {
    a = !!a && 'object' === typeof a ? a : undefined;
    b = !!b && 'object' === typeof b ? b : undefined;

    if (!a && !b) return undefined;

    const c = {
        ...(b || {}),
        ...(a || {}),
    };

    return Object.keys(c).length ? c : undefined;
}

export default mergeContextObjects;
