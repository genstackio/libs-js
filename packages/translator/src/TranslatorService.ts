import { translatable_item, translation_request, translator_list } from './types';
import convertTranslatedItemsToData from './utils/convertTranslatedItemsToData';
import convertDataToTranslatableItems from './utils/convertDataToTranslatableItems';
import { mergeBack } from './utils/mergeBack';
import cleanKeysComparedToReference from './utils/cleanKeysComparedToReference';
import computeTranslatableKeys from './utils/computeTranslatableKeys';
import mergeTranslatedKeysIntoLocaleKeys from './utils/mergeTranslatedKeysIntoLocaleKeys';
import { deepSort } from '@genstackio/deep';
import AbstractTranslatorService from './AbstractTranslatorService';
import prio from './utils/prio';
import cleanData from './utils/cleanData';

export class TranslatorService extends AbstractTranslatorService {
    async translateText(text: string, sourceLocale, targetLocale, config?: any, options?: any): Promise<string> {
        return (
            await convertTranslatedItemsToData(
                await this.executeTranslate({
                    items: convertDataToTranslatableItems({ text }),
                    sourceLocale,
                    targetLocale,
                    config,
                    options,
                }),
            )
        )['text'];
    }
    async translateTexts(texts: string[], sourceLocale, targetLocale, config?: any, options?: any): Promise<string[]> {
        return (
            await convertTranslatedItemsToData(
                await this.executeTranslate({
                    items: convertDataToTranslatableItems({ texts }),
                    sourceLocale,
                    targetLocale,
                    config,
                    options,
                }),
            )
        )['texts'];
    }
    async translateI18n<T = any>(
        data: any,
        refData: any,
        sourceLocale,
        targetLocale,
        config?: any,
        options?: any,
    ): Promise<T> {
        !!options?.clean && (data = await cleanKeysComparedToReference(data, refData));
        const translatableKeys = await computeTranslatableKeys(refData, data);
        const translatedKeys = await this.translateData(translatableKeys, sourceLocale, targetLocale, config, {
            mergeBack: false,
            replacer: options?.replacer,
        });

        let result = await mergeTranslatedKeysIntoLocaleKeys(
            translatedKeys,
            config?.clean ? cleanData(data, refData) : data,
        );

        if (!!options?.sort) {
            result = deepSort(result);
        }

        return result;
    }
    async translateData<T = any>(
        data: T,
        sourceLocale,
        targetLocale,
        config?: any,
        options?: { replacer?: Function; mergeBack?: boolean },
    ): Promise<T> {
        const localOptions = { mergeBack: true, ...(options || {}) };
        let result = await convertTranslatedItemsToData(
            await this.executeTranslate({
                items: convertDataToTranslatableItems(data),
                sourceLocale,
                targetLocale,
                config,
                options: localOptions,
            }),
        );

        // noinspection PointlessBooleanExpressionJS
        !!localOptions.mergeBack && (result = mergeBack(result, data));

        return result as T;
    }
    async executeTranslate(request: translation_request) {
        if (!request?.items?.length) return [];

        const selectedPluginNames = await this.selectPluginNamesBasedOnRequest(request);

        // @todo do a loop to loop on selected plugin names in order until the first returns translation
        const selectedPluginName = selectedPluginNames.length >= 1 ? selectedPluginNames[0] : undefined;

        return this.executeTranslateOnPlugin(selectedPluginName || '', request);
    }
    async describePlugins(
        config: any,
    ): Promise<
        Record<
            string,
            { name: string; sourceLocales: string[]; targetLocales: string[]; priority: Record<string, number> }
        >
    > {
        return Object.entries(this.plugins).reduce(async (acc, [name, { plugin, priority }]) => {
            const localAcc = await acc;
            const [, , sl, tl] = plugin.getTranslator ? await plugin.getTranslator(config) : [undefined, undefined];
            localAcc[name] = {
                name,
                sourceLocales: Object.keys(sl || {}),
                targetLocales: Object.keys(tl || {}),
                priority,
            };
            return localAcc;
        }, Promise.resolve({}));
    }
    async listLocales(config: any): Promise<Record<string, { sourceLocales: string[]; targetLocales: string[] }>> {
        return Object.entries(this.plugins).reduce(async (acc, [name, { plugin }]) => {
            const localAcc = await acc;
            const [, sl, tl] = plugin.getTranslator
                ? await plugin.getTranslator((config || {})[name] || {})
                : [undefined, undefined];
            localAcc[name] = {
                sourceLocales: Object.keys(sl || {}),
                targetLocales: Object.keys(tl || {}),
            };
            return localAcc;
        }, Promise.resolve({}));
    }
    protected async executeTranslateOnPlugin(
        selectedPluginName: string,
        { items, sourceLocale, targetLocale, config, options }: translation_request,
    ) {
        const { plugin } = this.plugins[selectedPluginName || ''] || {};

        if (!plugin) {
            throw new Error(
                `No translator plugin ${selectedPluginName ? `'${selectedPluginName || ''}'` : 'selected'}`,
            );
        }

        const [translatableMap, translatableTexts] = items.reduce(
            (acc, item, index: number) => {
                acc[0].push([index, item]);
                acc[1].push(item.text);
                return acc;
            },
            [[], []] as [[number, translatable_item][], string[]],
        );

        const translatedTexts = await this.processPlugin(
            plugin,
            translatableTexts,
            sourceLocale,
            targetLocale,
            (config || {})[selectedPluginName] || {},
        );

        const replacer = (s) => (options?.replacer ? options?.replacer(s) : s);

        return translatableMap.reduce((acc, [n, it]: [number, any], i: number) => {
            acc[n] = { translation: replacer(translatedTexts[i]), item: it };
            return acc;
        }, [] as any[]);
    }
    async selectPluginNamesBasedOnRequest(request: translation_request): Promise<string[]> {
        const callable = await this.loadCallableTranslatorsOnRequest(request);
        const filtered = await this.filterTranslatorsOnRequest(callable, request);
        const ordered = await this.orderTranslatorsOnRequest(filtered, request);

        return ordered.map((o) => o[0]);
    }
    protected async loadCallableTranslatorsOnRequest({ config }: translation_request): Promise<translator_list> {
        const reports = await Promise.allSettled(
            Object.entries(this.plugins).map(async ([name, { plugin, priority }]) => {
                if (plugin.getTranslator) {
                    return [name, plugin, await plugin.getTranslator(config ? config[name] : {}), priority];
                }
                return [name, plugin, [undefined], priority];
            }),
        );

        return reports.filter((x) => x.status === 'fulfilled').map((x: any) => x.value);
    }
    protected async filterTranslatorsOnRequest(
        translators: translator_list,
        { sourceLocale, targetLocale }: translation_request,
    ): Promise<translator_list> {
        return translators.filter(([, p, [, sl, tl]]) => {
            try {
                p.mapSourceLocale && p.mapSourceLocale(sourceLocale, sl);
            } catch (e: any) {
                return false;
            }
            try {
                p.mapTargetLocale && p.mapTargetLocale(targetLocale, tl);
            } catch (e: any) {
                return false;
            }
            return true;
        });
    }
    protected async orderTranslatorsOnRequest(
        translators: translator_list,
        request: translation_request,
    ): Promise<translator_list> {
        [...translators].sort((a, b) => this.compareRequestPriority(request, a[3], b[3]));
        return translators;
    }
    protected compareRequestPriority(
        { sourceLocale, targetLocale }: translation_request,
        p1: Record<string, number>,
        p2: Record<string, number>,
    ) {
        if (prio(p1, `${sourceLocale}>${targetLocale}`) > prio(p2, `${sourceLocale}>${targetLocale}`)) return -1;
        if (prio(p2, `${sourceLocale}>${targetLocale}`) > prio(p1, `${sourceLocale}>${targetLocale}`)) return 1;
        if (prio(p1, `*>${targetLocale}`) > prio(p2, `*>${targetLocale}`)) return -1;
        if (prio(p2, `*>${targetLocale}`) > prio(p1, `*>${targetLocale}`)) return 1;
        if (prio(p1, `${sourceLocale}`) > prio(p2, `${sourceLocale}`)) return -1;
        if (prio(p2, `${sourceLocale}`) > prio(p1, `${sourceLocale}`)) return 1;
        if (prio(p1, `*`) > prio(p2, `*`)) return -1;
        if (prio(p2, `*`) > prio(p1, `*`)) return 1;
        return 0;
    }
}

export default TranslatorService;
