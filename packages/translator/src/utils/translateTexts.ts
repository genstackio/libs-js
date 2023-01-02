import {executeTranslate} from "../services/translator";
import convertTranslatedItemsToData from "./convertTranslatedItemsToData";
import convertDataToTranslatableItems from "./convertDataToTranslatableItems";

export async function translateTexts(texts: string[], sourceLocale, targetLocale, config?: any) {
    return (await convertTranslatedItemsToData(
        await executeTranslate(
            convertDataToTranslatableItems({texts}),
            sourceLocale,
            targetLocale,
            config
        )
    ))['texts'];
}

// noinspection JSUnusedGlobalSymbols
export default translateTexts;
