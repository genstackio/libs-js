export function buildNewRouteUri(p: string, {name, singularName}: {name: string, singularName: string}) {
    return (p || '')
        .replace('{name}', name)
        .replace('{singularName}', singularName);
}

export default buildNewRouteUri;
