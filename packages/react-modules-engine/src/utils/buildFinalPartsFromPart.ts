export function buildFinalPartsFromPart(p, pd, c = {}) {
    const x = pd.items[p];
    let pp: any[] = [];
    if (!x) return [{ id: p, type: p, ...(c[p] ? { ...c[p] } : {}) }];
    if (x.prepend?.length) pp = [...x.prepend.map((xx) => ({ id: xx, type: xx, ...(c[xx] || {}) })), ...pp];
    if (!x.remove) pp.push({ id: p, type: p, ...(c[p] || {}) });
    if (x.append?.length) pp = [...pp, ...x.append.map((xx) => ({ id: xx, type: xx, ...(c[xx] || {}) }))];
    return pp;
}

export default buildFinalPartsFromPart;
