export function buildListRouteUri(p: string, {name, filterName, pPage, pSize, pMode, pCursors}: {name: string, filterName?: string, pPage: string, pSize: string, pMode: string, pCursors: string}) {
    return (p || '')
        .replace('{name}', name)
        .replace('{filterName}', filterName || '')
        .replace('{pPage}', pPage)
        .replace('{pSize}', pSize)
        .replace('{pMode}', pMode)
        .replace('{pCursors}', pCursors)
}

export default buildListRouteUri;
