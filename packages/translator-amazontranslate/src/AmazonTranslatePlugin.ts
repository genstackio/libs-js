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
        let oldTexts = [...texts];
        let newTexts: {TranslatedText}[] = [];

        let joinedText: string = '';

        while(oldTexts.length) {
            joinedText = '';
            let i = 0;
            while(oldTexts.length && ((joinedText.length + oldTexts[0].length) < 9900)) {
                joinedText = `${joinedText || ''}${joinedText ? '<div translate=no>LINE</div>' : ''}${oldTexts.shift()}`;
                i++;
            }
            try {
                const x = await this.translateText(t, joinedText, sourceLocale, targetLocale, options);
                newTexts = [...newTexts, ...(x.TranslatedText || '').split(/<div translate=no>LINE<\/div>/).map(xx => ({TranslatedText: xx}))];
            } catch (e: any) {
                console.error(`ERROR [amazontranslate] ${e.message}`);
                for (let j = 0; j < i; j++) {
                    newTexts.push({TranslatedText: ''});
                }
            }
        }

        return newTexts;
    }
    async translateText(t: AWS.Translate, text: string, sourceLocale: any, targetLocale: any, options: Record<string, any> | undefined): Promise<any> {
        t.startTextTranslationJob()
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
