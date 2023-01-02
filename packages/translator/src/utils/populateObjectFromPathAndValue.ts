export function populateObjectFromPathAndValue(o: any, p: string, v: string) {
    let oo = o;
    const parts = p.split(/\|\|\|/g);
    const lastPart = parts.pop();
    parts.forEach(x => {
        // noinspection JSSuspiciousNameCombination
        let y: any = x;
        if (('string' === typeof x) && /^[0-9]+$/.test(x)) y = parseInt(x);
        if (!oo[y]) oo[y] = {};
        oo = oo[y];
    })
    oo[(('string' === typeof lastPart) && /^[0-9]+$/.test(lastPart!)) ? parseInt(lastPart!) : lastPart!] = v;
    return o;
}

export default populateObjectFromPathAndValue;
