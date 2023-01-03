import ITranslatorPlugin from "./ITranslatorPlugin";

export type translatable_item = {
    text: string;
    path: string;
};

export type translated_item = {
    translation: string;
    item: translatable_item;
};

export type translation_request = {
    items: translatable_item[];
    sourceLocale :string;
    targetLocale: string;
    config: any;
    options?: {replacer?: Function};
}

export type translator_list = [string, ITranslatorPlugin, any[], Record<string, number>][];
