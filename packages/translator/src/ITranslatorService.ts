import ITranslatorPlugin from "./ITranslatorPlugin";

export interface ITranslatorService {
    registerPlugin(name: string, plugin: ITranslatorPlugin);
    translateText(text: string, sourceLocale, targetLocale, config?: any, options?: any): Promise<string>;
    translateTexts(texts: string[], sourceLocale, targetLocale, config?: any, options?: any): Promise<string[]>;
    translateI18n<T = any>(data: T, refData: T, sourceLocale, targetLocale, config?: any, options?: any): Promise<T>;
    translateData<T = any>(data: T, sourceLocale, targetLocale, config?: any, options?: {replacer?: Function, mergeBack?: boolean}): Promise<T>;
}

export default ITranslatorService;
