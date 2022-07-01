import crudTypeSubtypeRoutes from "./crudTypeSubtypeRoutes";

export function crudTypeRoutes(name: string, {plural, types, ...def}: {plural?: string, types?: any, // noinspection JSUnusedLocalSymbols
    [key: string]: any}) {
    const singular = name;
    plural = plural || `${name}s`;
    return [
        {path: `/${plural}/page/:pPage/:pSize/:pMode/:pCursors?`, screen: 'crud/list', screenProps: {name, singular, plural, fullName: `${singular}/${plural}`}},
        ...Object.entries(types || {}).reduce((acc, [k, v]: [string, any]) => [
            ...acc,
            ...crudTypeSubtypeRoutes(name, {plural: plural as string, ...def}, k, v)
        ], [] as any[]),
        {path: `/${plural}/:id/edit`, screen: 'crud/edit', screenProps: {name, singular, plural, ...def, fullName: `${singular}/edit_${singular}`}},
        {path: `/${singular}/new`, screen: 'crud/new', screenProps: {name, singular, plural, ...def, fullName: `${singular}/create_${singular}`}},
        {path: `/${plural}/:id`, screen: 'crud/display', screenProps: {name, singular, plural, ...def, fullName: `${singular}/${singular}`}},
        {path: `/${plural}`, screen: 'crud/list', screenProps: {name, singular, plural, ...def, fullName: `${singular}/${plural}`}},
    ]
}

export default crudTypeRoutes;
