export function buildI18nResources(locales: (string | undefined)[], resourceFn: Function) {
    return locales
        .filter((x) => !!x)
        .reduce((acc, l) => {
            let data: any[] = [];
            try {
                const ll = l!.replace('-', '_');
                const localData = resourceFn(ll, l!) || [];
                data = Array.isArray(localData) ? localData : [localData];
                const k = l!.replace('_', '-');

                acc[k] = data.reduce((acc2, d) => {
                    Object.entries(d).reduce((acc3, [kk, vv]) => {
                        acc3[kk] = acc3[kk] || {};
                        Object.assign(acc3[kk], vv);
                        return acc3;
                    }, acc2);
                    return acc2;
                }, acc[k] || {});
            } catch (e: any) {
                console.error(`Unable to load i18n resource for locale '${l!}': ${e.message}`);
            }

            return acc;
        }, {});
}

export default buildI18nResources;
