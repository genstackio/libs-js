import translateData from "./translateData";
import cleanKeysComparedToReference from "./cleanKeysComparedToReference";
import computeTranslatableKeys from "./computeTranslatableKeys";
import mergeTranslatedKeysIntoLocaleKeys from "./mergeTranslatedKeysIntoLocaleKeys";
import {deepSort} from "@genstackio/deep";

export async function translateI18n(data: any, refData: any, sourceLocale, targetLocale, config?: any, options?: any) {
    !!options?.clean && (data = await cleanKeysComparedToReference(data, refData));
    const translatableKeys = await computeTranslatableKeys(refData, data);
    const translatedKeys = await translateData(translatableKeys, sourceLocale, targetLocale, config, {mergeBack: false, replacer: options?.replacer});

    let result = await mergeTranslatedKeysIntoLocaleKeys(translatedKeys, data);

    if (!!options?.sort) {
        result = deepSort(result);
    }

    return result;
}

// noinspection JSUnusedGlobalSymbols
export default translateI18n;
