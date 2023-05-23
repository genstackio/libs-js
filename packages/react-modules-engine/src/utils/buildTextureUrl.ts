export function buildTextureUrl(name: string) {
    if ('https://' !== name?.slice(0, 8))
        return `https://statics.default/tenants/default/images/patterns/${name}`;
    return name;
}

export default buildTextureUrl;
