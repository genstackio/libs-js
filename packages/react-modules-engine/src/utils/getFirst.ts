export function getFirst(o: any, ...keys: string[]) {
    return (o || {})[keys.find((k) => (o || {})[k]) || ''];
}

export default getFirst;
