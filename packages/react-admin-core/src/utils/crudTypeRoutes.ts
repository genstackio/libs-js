import crudTypeSubtypeRoutes from './crudTypeSubtypeRoutes';
import crudTypeFilterRoutes from './crudTypeFilterRoutes';

export function crudTypeRoutes(
    name: string,
    {
        plural,
        filters,
        types,
        ...def
    }: {
        plural?: string;
        types?: any;
        filters?: any; // noinspection JSUnusedLocalSymbols
        [key: string]: any;
    },
) {
    const singular = name;
    plural = plural || `${name}s`;
    return [
        def.list && {
            path: `/${plural}/page/:pPage/:pSize/:pMode/:pCursors?`,
            screen: 'crud/list',
            screenProps: { name, singular, plural, ...def, fullName: `${singular}/${plural}` },
        },
        ...Object.entries(filters || {}).reduce(
            (acc, [k, v]: [string, any]) => [
                ...acc,
                ...crudTypeFilterRoutes(name, { plural: plural as string, ...def }, k, v),
            ],
            [] as any[],
        ),
        ...Object.entries(types || {}).reduce(
            (acc, [k, v]: [string, any]) => [
                ...acc,
                ...crudTypeSubtypeRoutes(name, { plural: plural as string, ...def }, k, v),
            ],
            [] as any[],
        ),
        def.edit && {
            path: `/${plural}/:id/edit`,
            screen: 'crud/edit',
            screenProps: { name, singular, plural, ...def, fullName: `${singular}/edit_${singular}` },
        },
        def.new && {
            path: `/${singular}/new`,
            screen: 'crud/new',
            screenProps: { name, singular, plural, ...def, fullName: `${singular}/create_${singular}` },
        },
        def.display && {
            path: `/${plural}/:id`,
            screen: 'crud/display',
            screenProps: { name, singular, plural, ...def, fullName: `${singular}/${singular}` },
        },
        def.list && {
            path: `/${plural}`,
            screen: 'crud/list',
            screenProps: { name, singular, plural, ...def, fullName: `${singular}/${plural}` },
        },
    ];
}

export default crudTypeRoutes;
