import { useMemo } from 'react';
import LocaleChange, { LocaleChangeProps } from '../LocaleChange';
import useLocales from '@genstackio/react-contexts/lib/hooks/useLocales';

export function LanguageToolbarItem(props: LanguageToolbarItemProps) {
    const { locales } = useLocales();
    const preparedLocales = useMemo(() => locales.map((x) => ({ value: x.id, language: x.label })), [locales]);

    return <LocaleChange locales={preparedLocales} {...props} />;
}

export type LanguageToolbarItemProps = Omit<LocaleChangeProps, 'locales'>;

// noinspection JSUnusedGlobalSymbols
export default LanguageToolbarItem;
