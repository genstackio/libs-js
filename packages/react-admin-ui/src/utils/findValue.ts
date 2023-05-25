export function findValue(finalValues: any[], value: any, defaultValue: any, multiple = false) {
    if (multiple) {
        if (!value || !Array.isArray(value) || !value.length) return [];
        return finalValues.reduce((acc, c) => {
            if (c?.options?.length) {
                return c.options.reduce((acc2, cc) => {
                    if (value.includes(cc.value)) acc2.push(cc);
                    return acc2;
                }, acc);
            }
            if (value.includes(c.value)) {
                acc.push(c);
            }
            return acc;
        }, []);
    }
    const zz = undefined !== value && '' !== value ? value : defaultValue;
    const xx = finalValues.reduce((acc, c) => {
        if (c?.options?.length) {
            return c.options.reduce((acc2, cc) => {
                if (zz === cc.value) acc2.push(cc);
                return acc2;
            }, acc);
        }
        if (zz === c.value) {
            acc.push(c);
        }
        return acc;
    }, []);
    return xx?.length ? xx[0] : undefined;
}

export default findValue;
