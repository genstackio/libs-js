export function crudTypeFilterRoutes(
    parentName: string,
    { plural: parentPlural }: { plural: string },
    name: string,
    { plural, ...def }: { plural?: string; [key: string]: any },
) {
    const parentSingular = parentName;
    const singular = name;
    plural = plural || `${name}s`;
    return [
        {
            path: `/${parentPlural}/filters/${plural}/page/:pPage/:pSize/:pMode/:pCursors?`,
            screen: 'crud/filterList',
            screenProps: {
                name,
                singular,
                plural,
                parentName,
                parentSingular,
                parentPlural,
                ...def,
                fullName: `${parentSingular}/${plural}`,
            },
        },
        {
            path: `/${parentPlural}/filters/${plural}`,
            screen: 'crud/filterList',
            screenProps: {
                name,
                singular,
                plural,
                parentName,
                parentSingular,
                parentPlural,
                ...def,
                fullName: `${parentSingular}/${plural}`,
            },
        },
    ];
}

export default crudTypeFilterRoutes;
