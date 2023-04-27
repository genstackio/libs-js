export function buildDisplayRouteUri(
    p: string,
    { name, id, singularName }: { name: string; id: string; singularName: string },
) {
    return (p || '').replace('{name}', name).replace('{id}', id).replace('{singularName}', singularName);
}

export default buildDisplayRouteUri;
