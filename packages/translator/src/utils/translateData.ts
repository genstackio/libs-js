import {executeTranslate} from "../services/translator";
import convertTranslatedItemsToData from "./convertTranslatedItemsToData";
import convertDataToTranslatableItems from "./convertDataToTranslatableItems";

export async function translateData(data: any, sourceLocale, targetLocale, config?: any) {
    return convertTranslatedItemsToData(
        await executeTranslate(
            convertDataToTranslatableItems(data),
            sourceLocale,
            targetLocale,
            config
        )
    );
}

export default translateData;
