import * as deepl from 'deepl-node';
import { SourceLanguageCode, TargetLanguageCode, TextResult } from 'deepl-node';
import { AbstractTranslatorPlugin } from '@genstackio/translator';
import { decode } from 'html-entities';

export class DeeplPlugin extends AbstractTranslatorPlugin<
    deepl.Translator,
    SourceLanguageCode,
    TargetLanguageCode,
    string,
    TextResult
> {
    async translate(t: deepl.Translator, texts: string[], sourceLocale, targetLocale, options: Record<string, any>) {
        return t.translateText(texts, sourceLocale, targetLocale, options);
    }
    protected getKeyFromConfig({ authKey }: any): string {
        return authKey || 'default';
    }
    protected async createSourceLanguages(config: any, t?: deepl.Translator): Promise<{}> {
        return (await t!.getSourceLanguages()).reduce((acc, l) => Object.assign(acc, { [l.code]: true }), {});
    }
    protected async createTargetLanguages(config: any, t?: deepl.Translator): Promise<{}> {
        return (await t!.getTargetLanguages()).reduce((acc, l) => Object.assign(acc, { [l.code]: true }), {});
    }
    protected async createTranslator({ authKey, serverUrl }: any): Promise<deepl.Translator | undefined> {
        authKey = authKey || process.env.DEEPL_AUTH_KEY;
        if (!authKey) throw new Error('deepl: authkey is required');

        return new deepl.Translator(authKey, serverUrl ? { serverUrl } : {});
    }
    protected async createOptions(config, t?: deepl.Translator): Promise<any> {
        return {
            tagHandling: 'xml',
            ignoreTags: ['X'],
        };
    }
    mapTextToTranslatableText(t: string) {
        return t.replace(/(\{\{([a-z0-9_]+)}})/gi, (match, p1, p2) => `<X>${p2}</X>`);
    }
    mapTranslatedTextToText(t: TextResult) {
        return decode(
            (t.text || '').replace(/(<X>([a-z0-9_]+)<\/X>)/gi, (match, p1, p2) => `{{${p2}}}`),
            { level: 'xml' },
        );
    }
}

// noinspection JSUnusedGlobalSymbols
export default DeeplPlugin;
