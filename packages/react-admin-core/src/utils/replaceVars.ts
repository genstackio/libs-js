export function replaceVars(pattern: string, data: any = {}) {
    const r = new RegExp('\{\{([^\}]+)\}\}', 'g');
    // @ts-ignore
    const matches = [...pattern.matchAll(r as any)];
    const getValue = (k: any) => ('undefined' === typeof data[k]) ? '' : data[k];
    return matches.reduce((acc, m) => {
        for (let i = 0; i < (m.length - 1); i++) {
            acc = acc.replace(m[0], getValue(m[i + 1]));
        }
        return acc;
    }, pattern);
}

// noinspection JSUnusedGlobalSymbols
export default replaceVars;