import {translatable_item} from "../types";
import cleanBackString from "../utils/cleanBackString";

const defaultBackendName = 'deepl';

export async function executeTranslate(items: translatable_item[], from :string, to: string, config: any, options?: {replacer?: Function}) {
    if (!items.length) return [];

    let selectedBackendName: string|undefined;
    if (from === to) selectedBackendName = 'mirror';
    else {
        selectedBackendName = defaultBackendName;
        if (!selectedBackendName) throw new Error(`No backend selected for translation (missing config?)`);
    }

    let translator: any;
    try {
        translator = require(`${__dirname}/../translators/${selectedBackendName.replace(/[^a-z0-9_]+/g, '')}`).default;
    } catch (e: any) {
        throw new Error(`No translator for backend '${selectedBackendName}'`);
    }

    const [translatableMap, translatableTexts] = items.reduce((acc, item, index: number) => {
        acc[0].push([index, item]);
        acc[1].push(item.text);
        return acc;
    }, [[], []] as [[number, translatable_item][], string[]]);

    const translatedTexts = await translator(translatableTexts, from , to, (config || {})[selectedBackendName] || {});

    const replacer = (s: string) => {
        s = cleanBackString(s);
        options?.replacer && (s = options?.replacer(s));
        return s;
    };

    return translatableMap.reduce((acc, [n, it]: [number, any], i: number) => {
        acc[n] = {translation: replacer(translatedTexts[i]), item: it};
        return acc;
    }, [] as any[]);
}
