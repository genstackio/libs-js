export function formatLng(value: string) {
    if (!value) return undefined;
    if ('autodetect' === value) return value;
    const [a, b] = value.split('-');
    return `${a}-${b.toUpperCase()}`;
}

export default formatLng;
