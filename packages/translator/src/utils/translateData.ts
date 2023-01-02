import {executeTranslate} from "../services/translator";
import convertTranslatedItemsToData from "./convertTranslatedItemsToData";
import convertDataToTranslatableItems from "./convertDataToTranslatableItems";

export async function translateData(data: any, sourceLocale, targetLocale, config?: any, options?: {replacer?: Function}) {
    return convertTranslatedItemsToData(
        await executeTranslate(
            convertDataToTranslatableItems(data),
            sourceLocale,
            targetLocale,
            config,
            options
        )
    );
}

export default translateData;
