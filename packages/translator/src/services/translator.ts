import translators from '../translators';
import {translatable_item} from "../types";

export async function executeTranslate(items: translatable_item[], from :string, to: string, config: any, options?: {replacer?: Function}) {
    if (!items.length) return [];
    const selectedBackendName = Object.keys(config).find(k => !!translators[k]);
    if (!selectedBackendName) throw new Error(`No backend selected for translation (missing config?)`);

    const translator = translators[selectedBackendName];

    if (!translator) throw new Error(`No translator for backend '${selectedBackendName}'`);

    const [translatableMap, translatableTexts] = items.reduce((acc, item, index: number) => {
        acc[0].push([index, item]);
        acc[1].push(item.text);
        return acc;
    }, [[], []] as [[number, translatable_item][], string[]]);

    const translatedTexts = await translator(translatableTexts, from , to, config[selectedBackendName] || {});

    return translatableMap.reduce((acc, [n, it]: [number, any], i: number) => {
        acc[n] = {translation: options?.replacer ? options!.replacer(translatedTexts[i]) : translatedTexts[i], item: it};
        return acc;
    }, [] as any[]);
}