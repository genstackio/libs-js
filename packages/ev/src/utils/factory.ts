import { item, cached, options, providers, Provider } from '../types';

export function factory() {
    const cached: cached = {};
    const providers: providers = [];
    const defaultOptions = {
        ttl: 120000,
    };
    // noinspection JSUnusedLocalSymbols
    const findOneItem = async (key: string, options: options = {}): Promise<item | undefined> => {
        return cached[key];
    };
    const isExpired = async (item: item, options: options = {}) => {
        return Date.now() - item.t > (undefined === options.ttl ? defaultOptions.ttl : options.ttl);
    };
    // noinspection JSUnusedLocalSymbols
    const clearItem = async (key: string, options: options = {}) => {
        delete cached[key];
    };
    // noinspection JSUnusedLocalSymbols
    const extractItemValue = async (item: item, options: options = {}) => {
        return item.v;
    };
    const fetchItem = async (key: string, options: options = {}) => {
        const { found, value = undefined } = await providers.reduce(async (acc, p) => {
            const localAcc = await acc;
            if (localAcc?.found) return localAcc;
            const r = await p.provider.findOne(key, options);
            if (!!r) return { found: true, p, value: r };
            return acc;
        }, Promise.resolve({ found: false, value: undefined }));
        if (!found) return undefined;
        return { v: value, t: undefined === options.ttl ? defaultOptions.ttl : options.ttl };
    };
    // noinspection JSUnusedLocalSymbols
    const cacheItem = async (key: string, item: item, options: options = {}) => {
        cached[key] = item;
    };
    const get = async (key: string, defaultValue: any = undefined, options: any = {}) => {
        let item = await findOneItem(key, options);
        if (undefined === item) {
            const foundItem = await fetchItem(key, options);
            if (undefined === foundItem) return defaultValue;
            // warning: if foundItem as an expired timestamp => we will potentially do an infinite loop
            if (await isExpired(foundItem, options)) {
                return defaultValue;
            }
            item = foundItem;
            await cacheItem(key, item, options);
        }
        if (await isExpired(item, options)) {
            await clearItem(key, options);
            return get(key, defaultValue, options);
        }
        const value = await extractItemValue(item, options);
        if (undefined === value) return defaultValue;
        return value;
    };
    const sortProvidersStructure = (providers: providers) => {
        providers.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
    };
    const sortProviders = () => {
        sortProvidersStructure(providers);
    };
    const addProvider = async (name: string, provider: Provider, priority = 100) => {
        await removeProvider(name);
        providers.push({ name, priority, provider });
        sortProviders();
    };
    const removeProvider = async (name: string) => {
        const index = providers.findIndex((p) => p.name === name);
        if (-1 !== index) {
            delete providers[index];
            sortProviders();
        }
    };
    const findProviders = async () => {
        const pp = [...providers];
        sortProvidersStructure(pp);
        return pp;
    };
    const clear = async () => {
        await Object.keys(cached).reduce(async (acc: any, k: string) => {
            await acc;
            delete cached[k];
        }, Promise.resolve(undefined));
    };
    const set = async (key: string, value?: any, ttl?: number) => {
        await cacheItem(key, { v: value, t: Date.now() + (undefined !== ttl ? ttl : defaultOptions.ttl) });
    };
    const setMultiple = async (data: any, ttl?: number) => {
        await Object.entries(data).reduce(async (acc: any, [k, v]: [string, any]) => {
            await acc;
            return set(k, v, ttl);
        }, Promise.resolve(undefined));
    };

    return { get, set, setMultiple, clear, addProvider, removeProvider, findProviders };
}

export default factory;
