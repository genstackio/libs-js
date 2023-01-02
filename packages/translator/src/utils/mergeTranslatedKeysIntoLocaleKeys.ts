import {deepClone} from "@genstackio/deep";

export async function mergeTranslatedKeysIntoLocaleKeys(translatedKeys, localeKeys) {
    return Object.entries(translatedKeys).reduce((acc, [k, v]: [string, any]) => {
        if (!acc[k]) acc[k] = {};
        acc[k] = Object.entries(v).reduce((acc2, [kk, vv]) => {
            acc2[kk] = vv;
            return acc2;
        }, acc[k]);
        return acc;
    }, deepClone(localeKeys));
}

export default mergeTranslatedKeysIntoLocaleKeys;
