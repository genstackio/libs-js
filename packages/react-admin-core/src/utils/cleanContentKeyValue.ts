export function cleanContentKeyValue(v: Record<string, any>|undefined, key: string) {
    if (!v || !v[key]) return;
    if ('object' !== typeof v[key]) {
        delete v[key];
        return;
    }
    if ('string' !== typeof v[key].content) {
        delete v[key];
        return;
    }
    if ('' === v[key].content) {
        v[key] = '**clear**';
        return;
    }
    v[key] = v[key].content;
}

// noinspection JSUnusedGlobalSymbols
export default cleanContentKeyValue;
