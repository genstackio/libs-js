import AWS from 'aws-sdk';
import {AbstractTranslatorPlugin} from "@genstackio/translator";
import {LanguageCodeString} from "aws-sdk/clients/translate";
import {decode} from "html-entities";

export class AmazonTranslatePlugin extends AbstractTranslatorPlugin<AWS.Translate> {
    protected async createTranslator(config: any): Promise<AWS.Translate> {
        return new AWS.Translate();
    }
    protected getKeyFromConfig(config: any): string {
        return 'default';
    }
    protected async createSourceLanguages(config: any, t?: AWS.Translate): Promise<{}> {
        const items = await t!.listLanguages({}).promise();
        return items.Languages?.reduce((acc, l) => Object.assign(acc, {[l.LanguageCode]: true}), {} as Record<string, true>) || {} as Record<string, true>;
    }
    protected async createTargetLanguages(config: any, t?: AWS.Translate): Promise<{}> {
        const items = await t!.listLanguages({}).promise();
        return items.Languages?.reduce((acc, l) => Object.assign(acc, {[l.LanguageCode]: true}), {} as Record<string, true>) || {} as Record<string, true>;
    }
    async translate(t: AWS.Translate, texts: string[], sourceLocale: any, targetLocale: any, options: Record<string, any> | undefined): Promise<any[]> {
        const reports = await Promise.allSettled(texts.map(async (text: string) => this.translateText(t, text, sourceLocale, targetLocale, options)));

        const {texts: translatedTexts, errors} = reports.reduce((acc, r: any, index: number) => {
            if (r.status === 'fulfilled') {
                acc.texts.push(r.value);
            } else {
                acc.texts.push('');
                acc.errors.push([index, r.reason]);
            }
            return acc;
        }, {texts: [], errors: []} as {texts: any[], errors: [number, Error][]});

        errors.forEach(error => {
            console.error(`ERROR [amazontranslate] ${texts[error[0]]} => ${error[1].message}`);
        });

        return translatedTexts;
    }
    async translateText(t: AWS.Translate, text: string, sourceLocale: any, targetLocale: any, options: Record<string, any> | undefined): Promise<any> {
        return t.translateText({
            ...options,
            SourceLanguageCode: sourceLocale as LanguageCodeString,
            TargetLanguageCode: targetLocale as LanguageCodeString,
            Text: text,
        }).promise();
    }
    mapTextToTranslatableText(t: string) {
        return t.replace(/(\{\{([a-z0-9_]+)}})/gi, (match, p1, p2) => `<span translate=no>${p2}</span>`);
    }
    mapTranslatedTextToText(t: any) {
        return decode(
            (t.TranslatedText || '').replace(/(<span translate=no>([a-z0-9_]+)<\/span>)/gi, (match, p1, p2) => `{{${p2}}}`),
            {level: 'xml'}
        );
    }
}

// noinspection JSUnusedGlobalSymbols
export default AmazonTranslatePlugin;
