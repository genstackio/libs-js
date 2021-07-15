export function shortenLocale(locale: string) {
    return (locale || '').slice(0, 2).toUpperCase();
}

export default shortenLocale;
