import {executeTranslate} from "../services/translator";
import convertTranslatedItemsToData from "./convertTranslatedItemsToData";
import convertDataToTranslatableItems from "./convertDataToTranslatableItems";
import {mergeBack} from "./mergeBack";

export async function translateData(data: any, sourceLocale, targetLocale, config?: any, options?: {replacer?: Function, mergeBack?: boolean}) {
    const localOptions = {mergeBack: true, ...(options || {})};
    let result = await convertTranslatedItemsToData(
        await executeTranslate(
            convertDataToTranslatableItems(data),
            sourceLocale,
            targetLocale,
            config,
            localOptions
        )
    );

    // noinspection PointlessBooleanExpressionJS
    !!localOptions.mergeBack && (result = mergeBack(result, data));

    return result;
}

export default translateData;
