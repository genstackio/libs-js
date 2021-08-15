export function convertLocaleToFlagName(locale: string) {
    return locale.split(/-/)[1].toLowerCase();
}

export default convertLocaleToFlagName;
