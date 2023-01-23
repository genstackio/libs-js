export function populateObjectFromPathAndValue(o: any, p: string, v: string) {
    let oo = o;
    const parts = p.split(/\|\|\|/g);
    const lastPart = parts.pop();
    const isLastAnIndex = 'string' === typeof lastPart && /^[0-9]+$/.test(lastPart!);
    parts.forEach((x: any, ii: number) => {
        // noinspection JSSuspiciousNameCombination
        let y: any = x;
        const isIndex = 'string' === typeof x && /^[0-9]+$/.test(x);
        if (isIndex) y = parseInt(x);
        if (!oo[y]) {
            if (ii === parts.length - 1) {
                if (isLastAnIndex) oo[y] = [];
                else oo[y] = isIndex ? [] : {};
            } else oo[y] = isIndex ? [] : {};
        }
        oo = oo[y];
    });
    oo[isLastAnIndex ? parseInt(lastPart!) : lastPart!] = v;

    return o;
}

export default populateObjectFromPathAndValue;
