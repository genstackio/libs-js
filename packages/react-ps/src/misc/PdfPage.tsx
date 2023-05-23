import { useMemo } from 'react';
import I18nProvider from '@genstackio/react-i18n/lib/I18nProvider';
import { TemplateContextProvider } from '../contexts/TemplateContext';

const defaultTemplates = {};

export function PdfPage({ context, i18n, component: App }: PdfPageProps) {
    const ctx = useMemo(
        () => ({ ...(context?.data || {}), locale: context?.locale }),
        [context?.data, context?.locale],
    );
    return (
        <I18nProvider value={i18n}>
            <TemplateContextProvider value={context?.templates || defaultTemplates}>
                <App env={process.env.PLATFORM_ENV} data={ctx} />
            </TemplateContextProvider>
        </I18nProvider>
    );
}

export interface BasePdfPageProps {
    context: any;
}

export interface PdfPageProps extends BasePdfPageProps {
    i18n: any;
    component: any;
    templates: Record<string, any>;
}

export default PdfPage;
