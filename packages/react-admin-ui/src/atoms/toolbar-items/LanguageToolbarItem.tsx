import LocaleChange, { LocaleChangeProps } from '../LocaleChange';
import useLocales from '@genstackio/react-contexts/lib/hooks/useLocales';

export function LanguageToolbarItem(props: LanguageToolbarItemProps) {
    const { locales } = useLocales();
    return <LocaleChange locales={locales.map((x) => ({ value: x.id, language: x.label }))} {...props} />;
}

export type LanguageToolbarItemProps = Omit<LocaleChangeProps, 'locales'>;

export default LanguageToolbarItem;
