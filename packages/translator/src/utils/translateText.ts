import {executeTranslate} from "../services/translator";
import convertTranslatedItemsToData from "./convertTranslatedItemsToData";
import convertDataToTranslatableItems from "./convertDataToTranslatableItems";

export async function translateText(text: string, sourceLocale, targetLocale, config?: any, options?: any) {
    return (await convertTranslatedItemsToData(
        await executeTranslate(
            convertDataToTranslatableItems({text}),
            sourceLocale,
            targetLocale,
            config,
            options
        )
    ))['text'];
}

// noinspection JSUnusedGlobalSymbols
export default translateText;