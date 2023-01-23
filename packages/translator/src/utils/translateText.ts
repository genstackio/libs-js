import singleton from '../singleton';

export async function translateText(text: string, sourceLocale, targetLocale, config?: any, options?: any) {
    return singleton.translateText(text, sourceLocale, targetLocale, config, options);
}

export default translateText;
