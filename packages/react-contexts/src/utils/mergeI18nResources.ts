export function mergeI18nResources(resources: any) {
    if (!Array.isArray(resources)) return resources;

    return (resources as any[]).reduce((acc, r) => {
        return Object.keys(r).reduce((acc2, resourceLang) => {
            if (!acc2[resourceLang]) {
                acc2[resourceLang] = r[resourceLang];
                return acc2;
            }
            Object.entries(r[resourceLang]).reduce((acc3, [resourceNamespace, resourceKeys]) => {
                if (!acc3[resourceNamespace]) {
                    acc3[resourceNamespace] = resourceKeys;
                    return acc3;
                }
                acc3[resourceNamespace] = {...(resourceKeys as any), ...acc3[resourceNamespace]};
                return acc3;
            }, acc2[resourceLang]);
            return acc2;
        }, acc);
    }, {} as any);
}

export default mergeI18nResources