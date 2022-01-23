export const date = (v?: number) => {
    if (!v) return undefined;
    const d = new Date(v);
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
};
export const priceFromCents = (v?: number) => {
    if (!v) return undefined;
    return v/100;
};
export const unknown = (v: any) => v;
