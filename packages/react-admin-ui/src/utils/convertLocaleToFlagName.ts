export function convertLocaleToFlagName(locale: string) {
    const [a, b] = (locale || '').split(/-/);
    return (b || a || '').toLowerCase();
}

export default convertLocaleToFlagName;
