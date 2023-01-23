export interface ITranslatorPlugin<T = any, U = any, V = any, W = string, X = any> {
    getTranslator?(
        config: Record<string, any>,
    ): Promise<
        [T, Record<string, true> | undefined, Record<string, true> | undefined, Record<string, any> | undefined]
    >;
    mapSourceLocale?(locale: string, sl: Record<string, true> | undefined): any;
    mapTargetLocale?(locale: string, tl: Record<string, true> | undefined): any;
    mapTextToTranslatableText?(t: string): W;
    mapTranslatedTextToText?(t: X): string;
    translate(
        t: any,
        texts: string[],
        sourceLocale: U,
        targetLocale: V,
        options: Record<string, any> | undefined,
    ): Promise<X[]>;
}

export default ITranslatorPlugin;
