export function replaceFn(pattern, fn: Function) {
    const r = new RegExp(`\\$([a-z0-9_-]+)`, 'g');

    const items = [...(pattern || '').matchAll(r)];

    if (!items || !items.length) return pattern;

    if (1 === items.length && 2 === items[0].length) {
        if (items[0][0] === pattern) return fn(items[0][1]);

        return pattern.replace(items[0][0], fn(items[0][1]));
    }

    return items.reduce((acc, m) => {
        for (let i = 0; i < m.length - 1; i++) {
            acc = acc.replace(m[0], fn(m[i + 1]));
        }
        return acc;
    }, pattern);
}

export function replaceStringVars(pattern, data = {}) {
    const replacer = (k: string) => {
        let defaultValue: any = undefined;
        if (-1 < k.indexOf('||')) {
            const tokens = k.split('||');
            k = tokens[0];
            defaultValue = tokens[1];
        }
        const [kk, filter = undefined] = k.split('|') as [string, string?];
        let value: any = 'undefined' === typeof data[kk] ? defaultValue : data[kk];
        switch (filter) {
            case 'url':
                value = encodeURIComponent(value);
                break;
            case 'upper':
                value = (value || '').toUpperCase();
                break;
            case 'lower':
                value = (value || '').toLowerCase();
                break;
            default:
                break;
        }
        return value || '';
    };

    return replaceFn(pattern, replacer);
}
export function replaceVars(v: any, data = {}) {
    if (!v) return v;
    if ('string' === typeof v) return replaceStringVars(v, data);
    if (Array.isArray(v)) return v.map((x) => replaceVars(x, data));
    if ('object' === typeof v)
        return Object.entries(v).reduce(
            (acc, [kk, vv]) => Object.assign(acc, { [replaceVars(kk, data)]: replaceVars(vv, data) }),
            {},
        );
    return v;
}
