export function crudTypeSubtypeRoutes(parentName: string, {plural: parentPlural}: {plural: string}, name: string, {plural, ...def}: {plural?: string}) {
    const parentSingular = parentName;
    const singular = name;
    plural = plural || `${name}s`;
    return [
        {path: `/${parentPlural}/:parentId/${plural}/page/:pPage/:pSize/:pMode/:pCursors?`, screen: 'crud/subList', screenProps: {name, singular, plural, parentName, parentSingular, parentPlural, ...def, fullName: `${parentSingular}/${plural}`}},
        {path: `/${parentPlural}/:parentId/${plural}`, screen: 'crud/subList', screenProps: {name, singular, plural, parentName, parentSingular, parentPlural, ...def, fullName: `${parentSingular}/${plural}`}},
        {path: `/${parentPlural}/:parentId/${plural}/:id`, screen: 'crud/display', screenProps: {name, singular, plural, parentName, parentSingular, parentPlural, ...def, fullName: `${parentSingular}/${singular}`}},
    ];
}

export default crudTypeSubtypeRoutes;
