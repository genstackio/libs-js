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
            path: `/${parentPlural}/filters/:filterName/page/:pPage/:pSize/:pMode/:pCursors?`,
            screen: 'crud/list',
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
            path: `/${parentPlural}/filters/:filterName`,
            screen: 'crud/list',
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
