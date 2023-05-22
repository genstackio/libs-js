import { I18nextProvider } from 'react-i18next';

export function I18nProvider({ value, children }: I18nProviderProps) {
    return <I18nextProvider i18n={value}>{children || ''}</I18nextProvider>;
}

export interface I18nProviderProps {
    value: any;
    children?: any;
}

export default I18nProvider;
