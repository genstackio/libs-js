export function formatLng(value: string) {
    const [a, b] = value.split('-');
    return `${a}-${b.toUpperCase()}`;
}

export default formatLng;
