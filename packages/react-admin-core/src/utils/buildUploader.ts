// noinspection JSUnusedLocalSymbols

import { uploader_builder_options } from '../types';

const defaultInitFn = async (init: any, userContext: any) => init;
const defaultCleanFn = async (result: any, userContext: any) => result;
const defaultLoadIdentityFn = async (userContext: any, _: any, { anonymousify }: { anonymousify?: Function } = {}) => {
    const headers: Record<string, any> = {};
    let { token } = userContext.getTokens() || {};

    if (!token && anonymousify) {
        token = await anonymousify();
    }

    token && (headers['Authorization'] = `bearer ${token}`);

    return { headers };
};
const defaultFetchFn = async ({ url, options }: { url: string; options: any }, userContext: any) => {
    if ('undefined' === typeof fetch) throw new Error('No fetch function available');
    return fetch(url, options);
};
const defaultConfigureFn = async (cfg: any, userContext: any) => cfg;

export function buildUploader(url: string | undefined, options: uploader_builder_options = {}) {
    let {
        configure: configureFn,
        loadIdentity: loadIdentityFn,
        init: initFn,
        clean: cleanFn,
        fetch: fetchFn,
        anonymousify = false,
    } = options;
    initFn = initFn || defaultInitFn;
    cleanFn = cleanFn || defaultCleanFn;
    loadIdentityFn = loadIdentityFn || defaultLoadIdentityFn;
    configureFn = configureFn || defaultConfigureFn;
    fetchFn = fetchFn || defaultFetchFn;
    return async (xx: any, userContext: any) => {
        const config = (await configureFn!({ url }, userContext, xx)) || { url };
        url = config?.url;
        if (!url) throw new Error(`No upload url endpoint available`);
        const { headers = {} }: { headers: Record<string, any> } =
            (await loadIdentityFn!(userContext, xx, { anonymousify })) || {};
        const init = { headers };
        const r = await (
            await fetchFn!({ url: url!, options: await initFn!(init, userContext, xx) }, userContext, xx)
        ).json();
        return cleanFn!(
            {
                fields: JSON.parse(r.fields),
                meta: { fileUrl: r.fileUrl },
                url: r.uploadUrl,
            },
            userContext,
            xx,
        );
    };
}

// noinspection JSUnusedGlobalSymbols
export default buildUploader;
