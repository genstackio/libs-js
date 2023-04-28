export function crudTypeFilterRoutes(
    parentName: string,
    { plural: parentPlural, ...parentDef }: { plural: string },
    name: string,
    { plural, ...def }: { plural?: string; [key: string]: any },
) {
    const parentSingular = parentName;
    return [
        {
            path: `/${parentPlural}/filters/${name}/page/:pPage/:pSize/:pMode/:pCursors?`,
            screen: 'crud/list',
            screenProps: {
                name: parentName,
                filterName: name,
                singular: parentSingular,
                plural: parentPlural,
                ...parentDef,
                ...def,
                list: {
                    ...(parentDef?.['list'] || {}),
                    ...(def?.['list'] || {}),
                },
                fullName: `${parentSingular}/filters/${name}`,
            },
        },
        {
            path: `/${parentPlural}/filters/${name}`,
            screen: 'crud/list',
            screenProps: {
                name: parentName,
                filterName: name,
                singular: parentSingular,
                plural: parentPlural,
                ...parentDef,
                ...def,
                list: {
                    ...(parentDef?.['list'] || {}),
                    ...(def?.['list'] || {}),
                },
                fullName: `${parentSingular}/filters/${name}`,
            },
        },
    ];
}

export default crudTypeFilterRoutes;
