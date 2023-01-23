import singleton from '../singleton';

export async function translateTexts(texts: string[], sourceLocale, targetLocale, config?: any, options?: any) {
    return singleton.translateTexts(texts, sourceLocale, targetLocale, config, options);
}

export default translateTexts;
