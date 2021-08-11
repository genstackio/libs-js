export function applyMap(item, map): any {
    console.log(item, map);
    if (!map || !Object.keys(map).length) return item;
    return Object.entries(item).reduce((acc, [k, v]) => {
        if (map[k]) {
            let x = map[k];
            if (!Array.isArray(x)) x = [x];
            x.forEach((vv) => {
                acc[vv] = v;
            });
        } else {
            acc[k] = v;
        }
        return acc;
    }, {});
}

export default applyMap;
