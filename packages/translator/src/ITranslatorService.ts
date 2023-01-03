import ITranslatorPlugin from "./ITranslatorPlugin";

export interface ITranslatorService {
    describePlugins(config: any): Promise<Record<string, {name: string, sourceLocales: string[], targetLocales: string[], priority: Record<string, number>}>>;
    listLocales(config: any): Promise<Record<string, {sourceLocales: string[], targetLocales: string[]}>>;
    registerPlugin(name: string, plugin: ITranslatorPlugin);
    translateText(text: string, sourceLocale, targetLocale, config?: any, options?: any): Promise<string>;
    translateTexts(texts: string[], sourceLocale, targetLocale, config?: any, options?: any): Promise<string[]>;
    translateI18n<T = any>(data: T, refData: T, sourceLocale, targetLocale, config?: any, options?: any): Promise<T>;
    translateData<T = any>(data: T, sourceLocale, targetLocale, config?: any, options?: {replacer?: Function, mergeBack?: boolean}): Promise<T>;
}

export default ITranslatorService;
