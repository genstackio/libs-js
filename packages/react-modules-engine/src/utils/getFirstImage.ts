export function getFirstImage(o: any, ...keys: string[]) {
    return (o || {})[keys.find((k) => (o || {})[k]?.url) || ''];
}

export default getFirstImage;
