import AbstractTranslatorPlugin from "./AbstractTranslatorPlugin";

export class MirrorPlugin extends AbstractTranslatorPlugin {
    protected async createSourceLanguages(config: any, t?: any): Promise<{}> {
        return {'*': true};
    }
    protected async createTargetLanguages(config: any, t?: any): Promise<{}> {
        return {'*': true};
    }
    async translate(t: any, texts: string[], sourceLocale: any, targetLocale: any, options: Record<string, any> | undefined): Promise<any[]> {
        return texts;
    }
}

// noinspection JSUnusedGlobalSymbols
export default MirrorPlugin;
