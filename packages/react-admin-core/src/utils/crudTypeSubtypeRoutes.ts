export function crudTypeSubtypeRoutes(
    parentName: string,
    { plural: parentPlural }: { plural: string },
    name: string,
    { plural, ...def }: { plural?: string; [key: string]: any },
) {
    const parentSingular = parentName;
    const singular = name;
    plural = plural || `${name}s`;
    return [
        def.list && {
            path: `/${parentPlural}/:parentId/${plural}/page/:pPage/:pSize/:pMode/:pCursors?`,
            screen: 'crud/subList',
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
        def.list && {
            path: `/${parentPlural}/:parentId/${plural}`,
            screen: 'crud/subList',
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
        def.display && {
            path: `/${parentPlural}/:parentId/${plural}/:id`,
            screen: 'crud/display',
            screenProps: {
                name,
                singular,
                plural,
                parentName,
                parentSingular,
                parentPlural,
                ...def,
                fullName: `${parentSingular}/${singular}`,
            },
        },
    ];
}

export default crudTypeSubtypeRoutes;
