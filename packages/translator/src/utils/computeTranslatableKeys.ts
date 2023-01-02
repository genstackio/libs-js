export async function computeTranslatableKeys(aKeys, bKeys) {
    return Object.entries(aKeys).reduce((acc, [k, v]: [string, any]) => {
        acc[k] = Object.entries(v).reduce((acc2, [kk, vv]) => {
            if (bKeys && bKeys[k] && bKeys[k][kk]) return acc2;
            acc2[kk] = vv;
            return acc2;
        }, {});
        if (!Object.keys(acc[k]).length) delete acc[k];
        return acc;
    }, {});
}

export default computeTranslatableKeys;
