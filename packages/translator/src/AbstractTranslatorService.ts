import ITranslatorService from "./ITranslatorService";
import ITranslatorPlugin from "./ITranslatorPlugin";

export abstract class AbstractTranslatorService implements ITranslatorService {
    abstract describePlugins(config: any): Promise<Record<string, {name: string, sourceLocales: string[], targetLocales: string[], priority: Record<string, number>}>>;
    abstract listLocales(config: any): Promise<Record<string, {sourceLocales: string[], targetLocales: string[]}>>;
    abstract translateI18n<T = any>(data: T, refData: T, sourceLocale, targetLocale, config?: any, options?: any): Promise<T>;
    abstract translateData<T = any>(data: T, sourceLocale, targetLocale, config?: any, options?: { replacer?: Function; mergeBack?: boolean }): Promise<T>;
    abstract translateText(text: string, sourceLocale, targetLocale, config?: any, options?: any): Promise<string>;
    abstract translateTexts(texts: string[], sourceLocale, targetLocale, config?: any, options?: any): Promise<string[]>;
    protected readonly plugins: Record<string, {plugin: ITranslatorPlugin, priority: Record<string, number>}> = {};
    registerPlugin(name: string, plugin: ITranslatorPlugin, priority: Record<string, number> = {}) {
        this.plugins[name] = {plugin, priority};
        return this;
    }
    protected async processPlugin(plugin: ITranslatorPlugin, texts: string[], from: string, to: string, config: any) {
        const [t, sl = undefined, tl = undefined, op = undefined] = plugin.getTranslator ? await plugin.getTranslator(config) : [undefined];

        return (await plugin.translate(
            t,
            plugin.mapTextToTranslatableText ? texts.map(plugin.mapTextToTranslatableText) : texts,
            plugin.mapSourceLocale ? plugin.mapSourceLocale(from, sl) : from,
            plugin.mapTargetLocale ? plugin.mapTargetLocale(to, tl) : to,
            op
        )).map(x => plugin.mapTranslatedTextToText ? plugin.mapTranslatedTextToText(x) : x);
    }
}

export default AbstractTranslatorService;
