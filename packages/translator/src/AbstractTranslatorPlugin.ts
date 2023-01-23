import ITranslatorPlugin from './ITranslatorPlugin';

export abstract class AbstractTranslatorPlugin<T = any, U = any, V = any, W = any, X = any>
    implements ITranslatorPlugin<T, U, V, W, X>
{
    protected readonly translators: Record<string, T> = {};
    protected readonly sourceLanguages: Record<string, Record<string, any>> = {};
    protected readonly targetLanguages: Record<string, Record<string, any>> = {};
    protected readonly optionsMap: Record<string, Record<string, any>> = {};
    protected readonly caches: Record<string, [T, Record<string, true>, Record<string, true>, Record<string, any>]> =
        {};
    // noinspection JSUnusedLocalSymbols
    protected getKeyFromConfig(config: any) {
        return 'default';
    }
    // noinspection JSUnusedLocalSymbols
    protected async createTranslator(config: any): Promise<T | undefined> {
        return {} as any as T;
    }
    // noinspection JSUnusedLocalSymbols
    protected async createSourceLanguages(config: any, t?: T) {
        return {};
    }
    // noinspection JSUnusedLocalSymbols
    protected async createTargetLanguages(config: any, t?: T) {
        return {};
    }
    // noinspection JSUnusedLocalSymbols
    protected async createOptions(config, t?: T) {
        return {};
    }
    async getTranslator(config: any): Promise<[T, Record<string, true>, Record<string, true>, Record<string, any>]> {
        const key = this.getKeyFromConfig(config);
        if (!this.caches[key]) {
            const t = await this.createTranslator(config);
            this.sourceLanguages[key] = await this.createSourceLanguages(config, t);
            this.targetLanguages[key] = await this.createTargetLanguages(config, t);
            this.optionsMap[key] = await this.createOptions(config, t);
            this.translators[key] = t as any as T;
            this.caches[key] = [
                this.translators[key],
                this.sourceLanguages[key],
                this.targetLanguages[key],
                this.optionsMap[key],
            ];
        }
        return this.caches[key];
    }
    mapTextToTranslatableText(t: string): W {
        return t as any as W;
    }
    mapTranslatedTextToText(t: X) {
        return t as any as string;
    }
    abstract translate(
        t: T,
        texts: string[],
        sourceLocale: U,
        targetLocale: V,
        options: Record<string, any>,
    ): Promise<X[]>;
    mapSourceLocale(locale: string, sl: Record<string, true>): U {
        const l = locale.replace('_', '-');
        if (sl[l]) return l as any as U;
        const [ll] = (l as string).split('-');
        if (sl[ll]) return ll as any as U;
        if (sl['*']) return ll as any as U;
        throw new Error(`Unsupported source locale '${locale}' (available: ${Object.keys(sl).join(', ')})`);
    }
    mapTargetLocale(locale: string, tl: Record<string, true>): V {
        const l = locale.replace('_', '-');
        if (tl[l]) return l as any as V;
        const [ll] = (l as string).split('-');
        if (tl[ll]) return ll as any as V;
        if (tl['*']) return ll as any as V;
        throw new Error(`Unsupported target locale '${locale}' (available: ${Object.keys(tl).join(', ')})`);
    }
}

export default AbstractTranslatorPlugin;
