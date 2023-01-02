import {executeTranslate} from "../services/translator";
import convertTranslatedItemsToData from "./convertTranslatedItemsToData";
import convertDataToTranslatableItems from "./convertDataToTranslatableItems";

export async function translateText(text: string, sourceLocale, targetLocale, config?: any) {
    return (await convertTranslatedItemsToData(
        await executeTranslate(
            convertDataToTranslatableItems({text}),
            sourceLocale,
            targetLocale,
            config
        )
    ))['text'];
}

// noinspection JSUnusedGlobalSymbols
export default translateText;
