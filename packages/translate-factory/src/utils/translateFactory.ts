import replaceVars from '@genstackio/replace';

export function translateFactory(translations, defaultLocale = 'fr_FR') {
    return function (namespace, key, data: any = {}, locale?: string, product?: string) {
        data = { ...data };

        data.fullServiceName =
            data.parentPartner?.name && !data.parentPartner?.main
                ? `${data?.parentPartner?.name} x ${data?.parentTenant?.name || 'GoTombola'}`
                : data?.parentTenant?.name || 'GoTombola';

        const tries: string[] = [];

        if (product && key && -1 < key.indexOf('_')) {
            const [a, ...b] = (key || '').split(/_/);
            tries.push(`${a}_${product}${b && b.length ? `_${b.join('_')}` : ''}`);
            tries.push(`${a}${b && b.length ? `_${b.join('_')}` : ''}`);
        } else {
            tries.push(key);
        }

        let pattern: string | undefined = undefined;

        tries.forEach((kk: string) => {
            if (pattern) return;
            pattern = ((translations[locale || ''] || {})[namespace] || {})[kk] || '';
            !pattern && (pattern = ((translations[defaultLocale || ''] || {})[namespace] || {})[kk] || '');
        });

        if (!pattern) {
            pattern = key;
        }

        pattern = replaceVars(pattern, data);

        pattern === key && (pattern = (pattern || '').replace(/_/g, ' '));

        return pattern || '';
    };
}

export default translateFactory;
