import cloneValue from '@genstackio/clone/lib/utils/cloneValue';

export function mergeModuleConfigs(a: any, b: any) {
    if (!a) return { ...(b || {}) };
    if (!b) return { ...(a || {}) };

    return Object.entries(b).reduce(
        (acc, [k, v]) => {
            if (!acc[k]) acc[k] = cloneValue(v);
            else if (v) {
                if ('object' === typeof v && 'object' === typeof acc[k])
                    acc[k] = { ...cloneValue(acc[k]), ...cloneValue(v) };
            }
            return acc;
        },
        { ...(a || {}) },
    );
}

export default mergeModuleConfigs;
