import { ComponentType } from 'react';
import useI18nFromLocale from '@genstackio/react-i18n/lib/hooks/use18nFromLocale';
import PdfPage, { PdfPageProps } from './PdfPage';

export function BasicPdfPage({ app, createI18n, ...props }: BasicPdfPageProps) {
    const i18n = useI18nFromLocale(props.context?.locale, createI18n);

    return <PdfPage {...props} i18n={i18n} component={app} />;
}

export interface BasicPdfPageProps extends Omit<PdfPageProps, 'i18n' | 'component'> {
    app: ComponentType<any>;
    createI18n: Function;
}

export default BasicPdfPage;
